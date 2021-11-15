package com.crawlingweb.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Table(name = "encarlist")
@Entity
public class Encarlist {
    @Id
    @Column(name = "ID", nullable = false)
    private String id;

    @Column(name = "MANUFACTURER")
    private String manufacturer;

    @Column(name = "MODEL")
    private String model;

    @Column(name = "BADGE")
    private String badge;

    @Column(name = "BADGEDETAIL")
    private String badgedetail;

    @Column(name = "FUELTYPE")
    private String fueltype;

    @Column(name = "TRANSMISSION")
    private String transmission;

    @Column(name = "FORMYEAR")
    private String formyear;

    @Column(name = "MILEAGE")
    private BigDecimal mileage;

    @Column(name = "PRICE")
    private BigDecimal price;

    @Column(name = "UPDATEDDATE")
    private LocalDate updateddate;

    @Column(name = "VIN")
    private String vin;

    @Column(name = "ACCIDENT")
    private String accident;

    @Column(name = "REPAIR")
    private String repair;

    @Column(name = "SOLDDATE")
    private LocalDate solddate;

    @Column(name = "AGE")
    private Integer age;

    @Column(name = "MODIFIEDDATE")
    private LocalDate modifieddate;

    @Lob
    @Column(name = "RAWDATA")
    private String rawdata;

    @Column(name = "CHECKDETAIL")
    private Boolean checkdetail;

    @Column(name = "BSOLD")
    private Boolean bsold;

    @Column(name = "BAVAILABLE")
    private Boolean bavailable;

    @Column(name = "ECODE")
    private String ecode;

    @Column(name = "FIRSTREG")
    private String firstreg;

    @Column(name = "SOLDDAYS")
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