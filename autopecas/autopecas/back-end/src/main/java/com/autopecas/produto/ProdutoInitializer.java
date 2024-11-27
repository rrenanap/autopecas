package com.autopecas.produto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProdutoInitializer implements CommandLineRunner {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public void run(String... args) throws Exception {

        if (produtoRepository.count() == 0) {

            List<Produto> produtos = List.of(
                    new Produto("Filtro de Óleo", "Filtro de óleo de alta performance para motores a gasolina e diesel.", 35.99, "https://marquinhom.vteximg.com.br/arquivos/ids/184202-1000-1000/04352000_zoom1.jpg?v=636793922283570000"),
                    new Produto("Amortecedor", "Amortecedor dianteiro para carros de passeio, modelo universal.", 150.75, "https://images.cws.digital/produtos/gg/39/72/amortecedor-para-motocicleta-7217239-1658356280139.jpg"),
                    new Produto("Pastilha de Freio", "Pastilhas de freio para veículos de médio porte.", 80.50, "https://images.tcdn.com.br/img/img_prod/1107048/n_1233_jogo_pastilhas_de_freio_dianteira_azera_gls_3_3_24v_cadenza_3_5_24v_carens_cvvt_2_0_16v_elant_87_1_b949af85d381d29094712b8dde933e22.jpg"),
                    new Produto("Bateria Automotiva", "Bateria automotiva de 60Ah, compatível com diversos modelos.", 350.00, "https://cdn.awsli.com.br/600x1000/2583/2583239/produto/2156320717a318211eb.jpg"),
                    new Produto("Lâmpada H4", "Lâmpada halógena H4 para faróis de automóveis.", 25.00, "https://http2.mlstatic.com/D_NQ_NP_968856-MLB54608506465_032023-O.webp"),
                    new Produto("Óleo Lubrificante 5W30", "Óleo para motores a gasolina e diesel, 1L.", 30.00, "https://agrosolo.fbitsstatic.net/img/p/oleo-lubrificante-sintetico-lubrax-para-motores-valora-5w-30-1-litro-80193/273105-1.jpg?w=700&h=700&v=no-value"),
                    new Produto("Filtro de Ar", "Filtro de ar automotivo para diversos modelos de veículos.", 45.60, "https://cdn.awsli.com.br/800x800/1842/1842173/produto/133613877104cdfa018.jpg"),
                    new Produto("Correia Dentada", "Correia dentada para motores 1.8 e 2.0.", 120.00, "https://www.lyonparts.com.br/img/products/kit-correia-dentada-citroen-c3-15-8v-todos_1_1200.jpg"),
                    new Produto("Vela de Ignição", "Vela de ignição para motores a gasolina.", 15.90, "https://www.retificafronza.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/vela_ngk.jpg"),
                    new Produto("Fluido de Freio", "Fluido de freio para sistemas hidráulicos automotivos.", 25.00, "https://images.tcdn.com.br/img/img_prod/1039962/fluido_de_freio_dot_3_500ml_681_1_01c06ef6079707607f2df9efa4cd2150.jpg")
            );

            produtoRepository.saveAll(produtos);
            System.out.println("Produtos de peças automotivas cadastrados automaticamente!");
        } else {
            System.out.println("Produtos já estão cadastrados.");
        }
    }
}
