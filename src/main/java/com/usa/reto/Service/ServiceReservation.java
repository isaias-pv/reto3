package com.usa.reto.Service;

import com.usa.reto.Model.Reservation;
import com.usa.reto.Repository.RepositoryReservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceReservation {
    
    @Autowired
    private RepositoryReservation repository;
    
    public List<Reservation> getAll() {
        return repository.getAll();
    }
    
    public Optional<Reservation> getClient(int id){
        return repository.getReservation(id);
    }
    
    public Reservation save(Reservation r){
        if(r.getIdReservation() == null){
            return repository.save(r);
        }else{
            Optional<Reservation> rAux = repository.getReservation(r.getIdReservation());
            if(rAux.isEmpty()){
                return repository.save(r);
            }else{
                return r;
            }
        }
    }
}