package To_do_list.service;

import To_do_list.repository.ToDoRepository;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {
    private final ToDoRepository repository;


    public ToDoService(ToDoRepository repository){
        this.repository = repository;
    }
}
