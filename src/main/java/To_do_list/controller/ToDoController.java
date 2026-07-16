package To_do_list.controller;

import To_do_list.entity.ToDo;
import To_do_list.service.ToDoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class ToDoController {

    private final ToDoService service;

    public ToDoController(ToDoService service) {
        this.service = service;
    }

    @GetMapping
    public List<ToDo> getAllTasks() {
        return service.getAllTasks();
    }

    @PostMapping
    public void addTask(@RequestBody ToDo todo) {
        service.addTask(todo);
    }

    @PutMapping("/{id}")
    public void completeTask(@PathVariable Long id) {
        service.completeTask(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}