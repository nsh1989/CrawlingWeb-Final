package com.crawlingweb.repository;

import com.crawlingweb.entity.Encarlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EncarlistRepository extends JpaRepository<Encarlist, String> {
    @Query("SELECT DISTINCT a.manufacturer FROM Encarlist a")
    List<String> getAllBrandslist();
    @Query("SELECT DISTINCT a.model FROM Encarlist a WHERE a.manufacturer = ?1")
    List<String> getBrandModelList(String Brand);
}