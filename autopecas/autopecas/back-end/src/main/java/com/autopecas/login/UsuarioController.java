package com.autopecas.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public Usuario cadastrar(@RequestBody UsuarioDTO usuarioDTO) {
        return usuarioService.cadastrarUsuario(usuarioDTO);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody UsuarioDTO usuarioDTO) {
        return usuarioService.loginUsuario(usuarioDTO.getEmail(), usuarioDTO.getSenha());
    }
}
