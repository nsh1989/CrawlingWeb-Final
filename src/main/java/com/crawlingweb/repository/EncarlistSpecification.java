package com.crawlingweb.repository;

import com.crawlingweb.entity.Encarlist;
import org.hibernate.query.criteria.internal.CriteriaBuilderImpl;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class EncarlistSpecification {


    public static Specification<Encarlist>equalBrand(final String brand){
        return new Specification<Encarlist>() {
            @Override
            public Predicate toPredicate(Root<Encarlist> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("MANUFACTURER"), brand);
            }
        };
    }
}
