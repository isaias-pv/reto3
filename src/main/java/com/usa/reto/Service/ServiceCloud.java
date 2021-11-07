package com.usa.reto.Service;

import com.usa.reto.Model.Cloud;
import com.usa.reto.Repository.RepositoryCloud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceCloud {
    
    @Autowired
    private RepositoryCloud repository;
    
    public List<Cloud> getAll() {
        return repository.getAll();
    }
    
    public Optional<Cloud> getCloud(int id){
        return repository.getCloud(id);
    }
    
    public Cloud save(Cloud c){
        if(c.getId()== null){
            return repository.save(c);
        }else{
            Optional<Cloud> cAux = repository.getCloud(c.getId());
            if(cAux.isEmpty()){
                return repository.save(c);
            }else{
                return c;
            }
        }
    }
}