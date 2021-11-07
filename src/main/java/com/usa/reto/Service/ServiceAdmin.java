package com.usa.reto.Service;

import com.usa.reto.Model.Admin;
import com.usa.reto.Repository.RepositoryAdmin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceAdmin {
    
    @Autowired
    private RepositoryAdmin repository;
    
    public List<Admin> getAll() {
        return repository.getAll();
    }
    
    public Optional<Admin> getAdmin(int id){
        return repository.getAdmin(id);
    }
    
    public Admin save(Admin c){
        if(c.getIdAdmin()== null){
            return repository.save(c);
        }else{
            Optional<Admin> aAux = repository.getAdmin(c.getIdAdmin());
            if(aAux.isEmpty()){
                return repository.save(c);
            }else{
                return c;
            }
        }
    }
}