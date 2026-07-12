package To_do_list.service;

import To_do_list.entity.ToDo;
import To_do_list.repository.ToDoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    private final ToDoRepository repository;


    public ToDoService(ToDoRepository repository){
        this.repository = repository;
    }
    public List<ToDo> getAllTasks(){

        return repository.findAll();
    }


    public void addTask(ToDo todo){
        repository.save(todo);
    }
}
