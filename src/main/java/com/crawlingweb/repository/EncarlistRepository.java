package com.crawlingweb.repository;

import com.crawlingweb.entity.Encarlist;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.math.BigDecimal;
import java.util.List;

public interface EncarlistRepository extends JpaRepository<Encarlist, String>, JpaSpecificationExecutor<Encarlist> {
    @Query("SELECT DISTINCT a.manufacturer FROM Encarlist a")
    List<String> getAllBrandslist();
    @Query("SELECT DISTINCT a.model FROM Encarlist a WHERE a.manufacturer = ?1")
    List<String> getBrandModelList(String Brand);
    @Query("SELECT DISTINCT a.badge FROM Encarlist a WHERE a.model = ?1")
    List<String> getSubModelList(String Model);

    @Query("SELECT DISTINCT a.badgedetail FROM Encarlist a WHERE a.badge = ?1")
    List<String> getDetailModelList(String SubModel);

    @Query("SELECT DISTINCT a.formyear FROM Encarlist a WHERE a.badge = ?1 AND " +
            "(?2 is null or (a.badgedetail = ?2))")
    List<String> getYearModelList(String SubModel, String Year);
}