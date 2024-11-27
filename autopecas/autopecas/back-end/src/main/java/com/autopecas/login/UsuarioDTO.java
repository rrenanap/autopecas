package com.autopecas.login;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class UsuarioDTO {
    private String oid;
    private String nome;
    private String email;
    private String senha;
}
