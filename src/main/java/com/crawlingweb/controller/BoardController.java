package com.crawlingweb.controller;

import com.crawlingweb.entity.Encarlist;
import com.crawlingweb.entity.ResultReturn;
import com.crawlingweb.repository.EncarlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
//        PageRequest request = PageRequest.of(pageNum - 1 , pageSize);
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

    @GetMapping("/getByFilters")
    @CrossOrigin(origins="*", allowedHeaders = "*")
    public ResponseEntity getByFilters(@RequestParam(value="sumbModel", required = false) String sumbModel,
                                       @RequestParam(value="detailModel", required = false) String detailModel,
                                       @RequestParam(value="brand", required = false) String brand,
                                       @RequestParam(value="model", required = false) String model,
                                       @RequestParam(value="year", required = false) String year,
                                       @RequestParam(value="age", required = false, defaultValue = "") String age,
                                       @RequestParam(value="km", required = false, defaultValue = "") String km,
                                       @RequestParam(value="ecode", required = false) String ecode,
                                       @RequestParam(value="kmParam", required = false, defaultValue = "") String kmParam,
                                       @RequestParam(value="ageParam", required = false, defaultValue = "") String ageParam,
                                       @RequestParam(value="pageIndex", required = false, defaultValue = "1") String pageIndex
                                       ) {
        Pageable pageable = new Pageable() {
            @Override
            public int getPageNumber() {
                return 0;
            }

            @Override
            public int getPageSize() {
                return 0;
            }

            @Override
            public long getOffset() {
                return 0;
            }

            @Override
            public Sort getSort() {
                return null;
            }

            @Override
            public Pageable next() {
                return null;
            }

            @Override
            public Pageable previousOrFirst() {
                return null;
            }

            @Override
            public Pageable first() {
                return null;
            }

            @Override
            public Pageable withPage(int pageNumber) {
                return null;
            }

            @Override
            public boolean hasPrevious() {
                return false;
            }
        };
        Page<Encarlist> Contents = encarlistRepository.findAll(pageable);
//        BigDecimal paramKM = new BigDecimal(0);
//        BigDecimal paramAge = new BigDecimal(0);
//        BigDecimal KM = new BigDecimal(0);
//        BigDecimal Age = new BigDecimal(0);
//        if(kmParam.equals("")){
//            paramKM = new BigDecimal(1000000000);
//        }
//        else{
//            paramKM = new BigDecimal(kmParam);
//        }
//        if(ageParam.equals("")){
//            paramAge = new BigDecimal(1000000000);
//        }
//        else{
//            paramAge = new BigDecimal(ageParam);
//        }
//        if(km.equals("") == false){
//            KM = new BigDecimal(km);
//        }
//        if(age.equals("") == false){
//            Age = new BigDecimal(age);
//        }
//        BigDecimal upKM = KM.add(paramKM);
//        BigDecimal downKM = KM.subtract( paramKM);
//        BigDecimal upAge = Age.add(paramAge);
//        BigDecimal downAge = Age.subtract( paramAge);
//        //////////////////////////////////////////////////
//
//        Connection conn;
//        Statement stmt;
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//        }
//        try{
//            String jdbcUrl = "jdbc:mariadb://localhost:3306/crawler";
//            String userID = "root";
//            String passwd = "root";
//
//            conn = DriverManager.getConnection(jdbcUrl, userID, passwd);
//            stmt = conn.createStatement();
//
//            String query = "SELECT * FROM `encarlist` where ";
//            if(ecode != null){
//                query = query +
//            }
//            ResultSet rs = stmt.executeQuery(query);
//
//            List<Encarlist> result = new ArrayList<>();
//            while(rs.next()){
//                Encarlist entity = new Encarlist();
//                entity.setAge(rs.getInt("AGE"));
//                result.add(entity);
//            }
//            System.out.println(1000);
//
//        } catch (SQLException e){
//            System.out.println(e);
//        }
//
//        System.out.println(10);
//
//        //////////////////////////////////////////////////////////////////////
//        List<Encarlist> searchList  = encarlistRepository.getByFilters(brand, model,
//                sumbModel, detailModel,
//                year, upKM, upAge.toBigIntegerExact().intValueExact(), ecode,
//                downAge.toBigIntegerExact().intValueExact(), downKM
//                );
//        int index = 1;
//        if(pageIndex.equals("")){
//            index = 1;
//        }
//        else{
//            index = Integer.parseInt(pageIndex);
//        }
//        PageRequest pageRequest = PageRequest.of(index, 10);
//        int total = searchList.size();
//        int start = toIntExact(pageRequest.getOffset());
//        int end = Math.min((start+ pageRequest.getPageSize()), total);
//
//        List<Encarlist> outputList = new ArrayList<>();
//
//        if( start<= end) {
//            outputList = searchList.subList(start, end);
//        }
//
//        ResultReturn Contents =  new ResultReturn();
//        Page<Encarlist> page = new PageImpl<>(outputList, pageRequest, total);
//
//        Contents.setPage(page);
//
//        BigDecimal sumAge = new BigDecimal(0);
//        BigDecimal sumKm = new BigDecimal(0);
//        BigDecimal sumPrice = new BigDecimal(0);
//
//
//        for(Encarlist entry: searchList){
//            sumPrice.add(entry.getPrice());
//            sumAge.add(new BigDecimal(entry.getAge()));
//            sumKm.add(entry.getPrice());
//        }
//
//        BigDecimal size = new BigDecimal(searchList.size());
//        System.out.println(size);
//        BigDecimal avgAge = sumAge.divide(size);
//        Contents.setAvgAge(avgAge);
//        BigDecimal avgKm = sumKm.divide(size);
//        Contents.setAvgMileage(avgKm);
//        BigDecimal avgPrice = sumPrice.divide(size);
//        Contents.setAvgSalesPrice(avgPrice);
//        Contents.setAvgPurchasePrice(avgPrice.multiply(new BigDecimal(0.93)));



        return new ResponseEntity<>(Contents, HttpStatus.OK);
    }


}
