package com.crawlingweb.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Table(name = "encarlist")
@Entity
public class Encarlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String manufacturer;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String model;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String badge;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String badgedetail;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String fueltype;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String transmission;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String formyear;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigDecimal mileage;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigDecimal price;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private LocalDate updateddate;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String vin;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accident;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String repair;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private LocalDate solddate;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer age;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private LocalDate modifieddate;

    @Lob
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String rawdata;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Boolean checkdetail;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Boolean bsold;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Boolean bavailable;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String ecode;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String firstreg;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private LocalDate solddays;

    public LocalDate getSolddays() {
        return solddays;
    }

    public void setSolddays(LocalDate solddays) {
        this.solddays = solddays;
    }

    public String getFirstreg() {
        return firstreg;
    }

    public void setFirstreg(String firstreg) {
        this.firstreg = firstreg;
    }

    public String getEcode() {
        return ecode;
    }

    public void setEcode(String ecode) {
        this.ecode = ecode;
    }

    public Boolean getBavailable() {
        return bavailable;
    }

    public void setBavailable(Boolean bavailable) {
        this.bavailable = bavailable;
    }

    public Boolean getBsold() {
        return bsold;
    }

    public void setBsold(Boolean bsold) {
        this.bsold = bsold;
    }

    public Boolean getCheckdetail() {
        return checkdetail;
    }

    public void setCheckdetail(Boolean checkdetail) {
        this.checkdetail = checkdetail;
    }

    public String getRawdata() {
        return rawdata;
    }

    public void setRawdata(String rawdata) {
        this.rawdata = rawdata;
    }

    public LocalDate getModifieddate() {
        return modifieddate;
    }

    public void setModifieddate(LocalDate modifieddate) {
        this.modifieddate = modifieddate;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public LocalDate getSolddate() {
        return solddate;
    }

    public void setSolddate(LocalDate solddate) {
        this.solddate = solddate;
    }

    public String getRepair() {
        return repair;
    }

    public void setRepair(String repair) {
        this.repair = repair;
    }

    public String getAccident() {
        return accident;
    }

    public void setAccident(String accident) {
        this.accident = accident;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public LocalDate getUpdateddate() {
        return updateddate;
    }

    public void setUpdateddate(LocalDate updateddate) {
        this.updateddate = updateddate;
    }

    public String getFormyear() {
        return formyear;
    }

    public void setFormyear(String formyear) {
        this.formyear = formyear;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getFueltype() {
        return fueltype;
    }

    public void setFueltype(String fueltype) {
        this.fueltype = fueltype;
    }

    public String getBadgedetail() {
        return badgedetail;
    }

    public void setBadgedetail(String badgedetail) {
        this.badgedetail = badgedetail;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getMileage() {
        return mileage;
    }

    public void setMileage(BigDecimal mileage) {
        this.mileage = mileage;
    }
}