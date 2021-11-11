package com.crawlingweb.controller;

import com.crawlingweb.entity.Encarlist;
import com.crawlingweb.repository.EncarlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.System;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

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

}
