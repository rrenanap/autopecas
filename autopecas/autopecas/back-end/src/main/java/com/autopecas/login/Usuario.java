package com.autopecas.login;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Table(name = "usuario")
@Data
public class Usuario {

    @Id
    @Column(name = "oid")
    private String oid;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

    @PrePersist
    private void prePersist() {
        if (this.oid == null) {
            this.oid = UUID.randomUUID().toString();
        }
    }
}
