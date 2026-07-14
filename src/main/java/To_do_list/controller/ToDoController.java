package To_do_list.controller;

import To_do_list.service.ToDoService;
import org.springframework.stereotype.Controller;

@Controller
public class ToDoController {
    private ToDoService service;
    public ToDoController(ToDoService service){
        this.service=service;
    }
}
