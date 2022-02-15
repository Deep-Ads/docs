import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title:
      "Tenha o domínio sobre todos os grupos de WhatsApp do seu lançamento!",
    image:
      "https://www.deeptools.com.br/wp-content/uploads/2022/02/cel-5-1.png",
    description: (
      <>
        A plataforma te proporciona a possibilidade de ter grupos ilimitados
        para o seu lançamento. Você pode escolher o limite de Leads por grupo,
        integrar a outras plataformas de tráfego pago, como Facebook Ads e
        Google Analytics.
      </>
    ),
  },
  {
    title: "Vendas no Automatico.",
    image:
      "https://www.deeptools.com.br/wp-content/uploads/2022/02/Sem-Titulo-2.png",
    description: (
      <>
        Utilizando o funil de automações, você pode notificar seus clientes
        sobre pagamentos aprovados, cancelamentos de assinatura e link para
        pagamento de boleto segundos após o cliente realizar a compra. Essa
        ferramenta está totalmente integrada com as maiores plataformas de
        vendas pela internet como a Hotmart.
      </>
    ),
  },
  {
    title: "Sem perder tempo.",
    image: "https://www.deeptools.com.br/wp-content/uploads/2022/02/foguete.png",
    description: (
      <>
        Com esta ferramenta, você não irá gastar mais do que 5 minutos criando
        os grupos do seu lançamento, definindo capas, descrições e
        administradores. Uma vez configurada a ferramenta, os grupos serão
        criados automaticamente.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <img alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
