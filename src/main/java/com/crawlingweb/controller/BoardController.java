package com.crawlingweb.controller;

import com.crawlingweb.entity.Encarlist;
import com.crawlingweb.entity.ResultReturn;
import com.crawlingweb.repository.EncarlistRepository;
import com.crawlingweb.repository.EncarlistSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.lang.System;
import java.math.BigDecimal;
import java.sql.*;
import java.text.DecimalFormat;
import java.util.*;

import static java.lang.Math.toIntExact;

@RestController
@CrossOrigin(origins="*", allowedHeaders = "*")
@RequestMapping("/api")
public class BoardController {

    private final EncarlistRepository encarlistRepository;

    public BoardController(EncarlistRepository encarlistRepository){
        this.encarlistRepository = encarlistRepository;
    }

    @GetMapping
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getlist(Pageable pageable) {
        System.out.println(pageable);
        Page<Encarlist> Contents = encarlistRepository.findAll(pageable);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getBrandlist")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getBrandlist() {
        List<String> Contents = encarlistRepository.getAllBrandslist();
        Collections.sort(Contents);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getModellist")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getModellist(@RequestParam(value="manufacturer", required = true) String req) {
        System.out.println(req);
        List<String> Contents = encarlistRepository.getBrandModelList(req);
        Collections.sort(Contents);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getSubModellist")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getSubModellist(@RequestParam(value="model", required = true) String req) {
        System.out.println(req);
        List<String> Contents = encarlistRepository.getSubModelList(req);
        Collections.sort(Contents);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getDetailModellist")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getDetailModellist(@RequestParam(value="submodel", required = true) String req) {
        System.out.println(req);
        List<String> Contents = encarlistRepository.getDetailModelList(req);
        Collections.sort(Contents);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getYearModellist")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getYearModellist(@RequestParam(value="submodel", required = true) String req,
                                           @RequestParam(value="detailmodel", required = false) String req1) {
        System.out.println(req);
        List<String> Contents = encarlistRepository.getYearModelList(req, req1);
        Collections.sort(Contents);
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }
    @GetMapping("/getAvgPrice")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getAvgPrice(
        @RequestParam(value="ecode", required = false) String ecode,
        @RequestParam(value="km", required = false, defaultValue = "0") BigDecimal km,
        @RequestParam(value="age", required = false, defaultValue = "0") int age){
        int ageParam = 12;
        BigDecimal kmParam = new BigDecimal(10000);
        Specification<Encarlist> spec = Specification.where(EncarlistSpecification.all(null));
        if(age != 0 && ageParam != 0){
            spec = spec.and(EncarlistSpecification.betweenAge(age-ageParam, age+ageParam));
        }
        if(!km.equals(new BigDecimal(0)) && !kmParam.equals(new BigDecimal(0))){
            BigDecimal StartKm = km.subtract(kmParam);
            BigDecimal EndKm = km.add(kmParam);
            spec = spec.and(EncarlistSpecification.betweenMileage(StartKm, EndKm));
        }
        if(ecode != null){
            spec = spec.and(EncarlistSpecification.equalEcode(ecode));
        }

        List<Encarlist> encarlists = encarlistRepository.findAll(spec);

        ResultReturn Contents =  new ResultReturn();
        BigDecimal sumPrice = new BigDecimal(0);

        for(Encarlist entry: encarlists){
            sumPrice = sumPrice.add(entry.getPrice());
        }
        BigDecimal size = new BigDecimal(encarlists.size());

        if(!size.equals(new BigDecimal(0))){
            BigDecimal avgPrice = sumPrice.divide(size, BigDecimal.ROUND_UP);
            Contents.setAvgSalesPrice(avgPrice);
            Contents.setAvgPurchasePrice(avgPrice.multiply(new BigDecimal(0.93)));
        }
        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }

    @GetMapping("/getByFilters")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getByFilters(@RequestParam(value="sumbModel", required = false) String sumbModel,
                                       @RequestParam(value="detailModel", required = false) String detailModel,
                                       @RequestParam(value="brand", required = false) String brand,
                                       @RequestParam(value="model", required = false) String model,
                                       @RequestParam(value="year", required = false) String year,
                                       @RequestParam(value="age", required = false, defaultValue = "0") int age,
                                       @RequestParam(value="km", required = false, defaultValue = "0") BigDecimal km,
                                       @RequestParam(value="ecode", required = false) String ecode,
                                       @RequestParam(value="kmParam", required = false, defaultValue = "0") BigDecimal kmParam,
                                       @RequestParam(value="ageParam", required = false, defaultValue = "0") int ageParam,
                                       @RequestParam(value="pageIndex", required = false, defaultValue = "1") int pageIndex
                                       ) {
        Specification<Encarlist> spec = Specification.where(EncarlistSpecification.all(null));
        if(age != 0 && ageParam != 0){
            spec = spec.and(EncarlistSpecification.betweenAge(age-ageParam, age+ageParam));
        }
        if(!km.equals(new BigDecimal(0)) && !kmParam.equals(new BigDecimal(0))){
            BigDecimal StartKm = km.subtract(kmParam);
            BigDecimal EndKm = km.add(kmParam);
            spec = spec.and(EncarlistSpecification.betweenMileage(StartKm, EndKm));
        }
        if(ecode != null){
            spec = spec.and(EncarlistSpecification.equalEcode(ecode));
        }
        else {
            if (brand != null) {
                spec = spec.and(EncarlistSpecification.equalBrand(brand));
            }
            if (model != null) {
                spec = spec.and(EncarlistSpecification.equalModel(model));
            }
            if (sumbModel != null) {
                spec = spec.and(EncarlistSpecification.equalbadge(sumbModel));
            }
            if (detailModel != null) {
                spec = spec.and(EncarlistSpecification.equalbadgedetail(detailModel));
            }
            if (year != null) {
                spec = spec.and(EncarlistSpecification.equalformyear(year));
            }
        }
        List<Encarlist> encarlists = encarlistRepository.findAll(spec);
        int index = 0;
        if(pageIndex != 0){
            index = pageIndex-1;
        }
        PageRequest pageRequest = PageRequest.of(index, 10);
        int total = encarlists.size();
        int start = toIntExact(pageRequest.getOffset());
        int end = Math.min((start+ pageRequest.getPageSize()), total);

        List<Encarlist> outputList = new ArrayList<>();
        if( start<= end) {
            outputList = encarlists.subList(start, end);
        }

        ResultReturn Contents =  new ResultReturn();
        Page<Encarlist> page = new PageImpl<>(outputList, pageRequest, total);
        Contents.setPage(page);

        BigDecimal sumAge = new BigDecimal(0);
        BigDecimal sumKm = new BigDecimal(0);
        BigDecimal sumPrice = new BigDecimal(0);


        for(Encarlist entry: encarlists){
            sumPrice = sumPrice.add(entry.getPrice());
            sumAge = sumAge.add(new BigDecimal(entry.getAge()));
            sumKm = sumKm.add(entry.getPrice());
        }
        BigDecimal size = new BigDecimal(encarlists.size());
        if(!size.equals(new BigDecimal(0))){
            System.out.println(encarlists);
            System.out.println(size);
            BigDecimal avgAge = sumAge.divide(size, BigDecimal.ROUND_UP);
            Contents.setAvgAge(avgAge);
            BigDecimal avgKm = sumKm.divide(size, BigDecimal.ROUND_UP);
            Contents.setAvgMileage(avgKm);
            BigDecimal avgPrice = sumPrice.divide(size, BigDecimal.ROUND_UP);
            Contents.setAvgSalesPrice(avgPrice);
            Contents.setAvgPurchasePrice(avgPrice.multiply(new BigDecimal(0.93)));
        }

        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }


}
