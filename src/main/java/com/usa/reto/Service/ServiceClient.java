package com.usa.reto.Service;

import com.usa.reto.Model.Client;
import com.usa.reto.Repository.RepositoryClient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceClient {
    
    @Autowired
    private RepositoryClient repository;
    
    public List<Client> getAll() {
        return repository.getAll();
    }
    
    public Optional<Client> getClient(int id){
        return repository.getClient(id);
    }
    
    public Client save(Client c){
        if(c.getIdClient()== null){
            return repository.save(c);
        }else{
            Optional<Client> cAux = repository.getClient(c.getIdClient());
            if(cAux.isEmpty()){
                return repository.save(c);
            }else{
                return c;
            }
        }
    }
}