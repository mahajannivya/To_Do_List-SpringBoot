package To_do_list.controller;

import To_do_list.entity.ToDo;
import To_do_list.service.ToDoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ToDoController {
    private ToDoService service;
    public ToDoController(ToDoService service){
        this.service=service;
    }
    @GetMapping("/")
    public String home(Model model){

        model.addAttribute(
                "tasks",
                service.getAllTasks()
        );

        model.addAttribute(
                "todo",
                new ToDo()
        );

        return "index";
    }

}
