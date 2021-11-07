package com.usa.reto.Service;

import com.usa.reto.Model.Category;
import com.usa.reto.Repository.RepositoryCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceCategory {
    
    @Autowired
    private RepositoryCategory repository;
    
    public List<Category> getAll() {
        return repository.getAll();
    }
    
    public Optional<Category> getCategory(int id){
        return repository.getCategory(id);
    }
    
    public Category save(Category c){
        if(c.getId() == null){
            return repository.save(c);
        }else{
            Optional<Category> cAux = repository.getCategory(c.getId());
            if(cAux.isEmpty()){
                return repository.save(c);
            }else{
                return c;
            }
        }
    }
}