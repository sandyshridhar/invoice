package com.example.invoice_project.controller;

import com.example.invoice_project.entity.Employee;
import com.example.invoice_project.entity.Invoice_Info;
import com.example.invoice_project.repository.Invoice_Info_Repository;
import com.example.invoice_project.service.Invoice_Info_Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
public class Invoice_Info_Controller {

    @Autowired
    Invoice_Info_Repository invoice_info_repository;
    private static List<String> designations;
    static {
        designations = new ArrayList<>();
        designations.add("Developer");
        designations.add("Consultant");
        designations.add("Manager");
        designations.add("Tester");
    }
    @GetMapping(path = "/invoice")
    private String getEmployeeForm(Model model) {
        model.addAttribute("designations", designations);
        return "invoice_info";
    }

    @PostMapping("/invoice")
    public ModelAndView addEmployeeForm() {
        log.info("inside the invoice");
        ModelAndView mav = new ModelAndView("invoice_info");
        Employee newEmployee = new Employee();
        mav.addObject("invoice_info", newEmployee);
        return mav;
    }
    @PostMapping("/saveInvoice")
    public String saveEmployee(@ModelAttribute Invoice_Info invoice_info) {
        log.info(" invoice saved.");
        invoice_info_repository.save(invoice_info);
        return "invoice_info";
    }




}
