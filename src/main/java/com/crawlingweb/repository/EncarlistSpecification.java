package com.crawlingweb.repository;

import com.crawlingweb.entity.Encarlist;
import org.hibernate.query.criteria.internal.CriteriaBuilderImpl;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.math.BigDecimal;

public class EncarlistSpecification {

    public static Specification<Encarlist>all(final String all){
        return (root, query, criteriaBuilder) -> criteriaBuilder.conjunction();
    }
    public static Specification<Encarlist>equalBrand(final String brand){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("manufacturer"), brand);
    }
    public static Specification<Encarlist>equalModel(final String model){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("model"), model);
    }
    public static Specification<Encarlist>equalbadge(final String badge){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("badge"), badge);
    }
    public static Specification<Encarlist>equalbadgedetail(final String badgedetail){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("badgedetail"), badgedetail);
    }
    public static Specification<Encarlist>equalformyear(final String formyear){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("formyear"), formyear);
    }
    public static Specification<Encarlist>betweenAge(final int startAge, final int endAge){
        return (root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("age"), startAge, endAge);
    }
    public static Specification<Encarlist>betweenMileage(final BigDecimal startMileage, final BigDecimal endMileage){
        return (root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("mileage"), startMileage, endMileage);
    }
    public static Specification<Encarlist>equalEcode(String ecode){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("ecode"), ecode);
    }

}
