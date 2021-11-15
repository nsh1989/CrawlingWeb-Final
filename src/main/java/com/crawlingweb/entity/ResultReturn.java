package com.crawlingweb.entity;


import org.springframework.data.domain.Page;

import java.math.BigDecimal;

public class ResultReturn {
    private Page<Encarlist> page;
    private int totalCars;
    private BigDecimal avgAge;
    private BigDecimal avgMileage;
    private BigDecimal avgSalesPrice;
    private BigDecimal avgPurchasePrice;

    public Page<Encarlist> getPage() {
        return page;
    }

    public void setPage(Page<Encarlist> page) {
        this.page = page;
    }

    public int getTotalCars() {
        return totalCars;
    }

    public void setTotalCars(int totalCars) {
        this.totalCars = totalCars;
    }


    public BigDecimal getAvgAge() {
        return avgAge;
    }

    public void setAvgAge(BigDecimal avgAge) {
        this.avgAge = avgAge;
    }

    public BigDecimal getAvgMileage() {
        return avgMileage;
    }

    public void setAvgMileage(BigDecimal avgMileage) {
        this.avgMileage = avgMileage;
    }

    public BigDecimal getAvgSalesPrice() {
        return avgSalesPrice;
    }

    public void setAvgSalesPrice(BigDecimal avgSalesPrice) {
        this.avgSalesPrice = avgSalesPrice;
    }

    public BigDecimal getAvgPurchasePrice() {
        return avgPurchasePrice;
    }

    public void setAvgPurchasePrice(BigDecimal avgPurchasePrice) {
        this.avgPurchasePrice = avgPurchasePrice;
    }
}
