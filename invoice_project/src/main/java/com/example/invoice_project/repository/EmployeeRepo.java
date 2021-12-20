package com.example.invoice_project.repository;

import com.example.invoice_project.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee,Integer> {
}
