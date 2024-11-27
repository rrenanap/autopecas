package com.autopecas.produto;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Table(name = "produto")
@Data
public class Produto {

    @Id
    @Column(name = "oid")
    private String oid;

    @Column(name = "nome")
    private String nome;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "imagem_url")
    private String imagemUrl;

    public Produto(String nome, String descricao, Double preco, String imagemUrl) {
        this.oid = UUID.randomUUID().toString();
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagemUrl = imagemUrl;
    }

    public Produto() {
        this.oid = UUID.randomUUID().toString();
    }

    @PrePersist
    private void prePersist() {
        if (this.oid == null) {
            this.oid = UUID.randomUUID().toString();
        }
    }
}
