package com.crawlingweb.repository;

import com.crawlingweb.entity.Encarlist;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface EncarlistRepository extends JpaRepository<Encarlist, String> {
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

//    필터로 가져오리
//    @Query("SELECT a FROM Encarlist as a WHERE 1=1 AND" +
//            "(?1 is null or a.manufacturer = ?1) AND " +
//            "(?2 is null or a.model = ?2) AND" +
//            "(?3 is null or a.badge = ?3) AND" +
//            "(?4 is null or a.badgedetail = ?4) AND" +
//            "(?5 is null or a.formyear = ?5) AND" +
//            "(?6 is null or (a.mileage between ?6 AND ?10)) AND" +
//            "(?7 is null or (a.age between ?7 AND ?9)) AND" +
//            "(?8 is null or a.ecode = ?8)")
    @Query("SELECT a FROM Encarlist as a WHERE " +
            "(a.manufacturer = nullif(?1,a.manufacturer) ) AND " +
            "(a.model = nullif(?2,a.model) ) AND " +
            "(a.badge = nullif(?3,a.badge) ) AND " +
            "(a.badgedetail = nullif(?4,a.badgedetail) ) AND " +
            "(a.formyear = nullif(?5,a.formyear) ) AND " +
            "(a.mileage between ?6 AND ?10) AND" +
            "(a.age between ?7 AND ?9) AND" +
            "(a.ecode = nullif(?8,a.ecode) )")
    List<Encarlist> getByFilters(String Brand, //1
                                 String Model,//2
                                 String SubModel,//3
                                 String DetailModel,//4
                                 String Year,//5
                                 BigDecimal upMileage,//6
                                 int upAge, String Ecode,
                                 int downAge, BigDecimal downMileage);
}