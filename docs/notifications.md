---
sidebar_position: 5
---

# Notificações Inteligentes

As notificações inteligentes são integrações que permite você se comunicar com clientes através de ações realizadas por eles, por exemplo quando um boleto é gerado ou uma compra é finalizada.

Atualmente temos suporte para integração com a [Hotmart](#hotmart), [Eduzz](#eduzz) e [Active Campaign](#activecampaign)

## Criando sua primeira notificação

1. Acesse a [página de notificações](https://painel.deeptools.com.br/notifications/)
2. Clique em criar notificações

![Criar notificações](/img/docs/notifications-create.png)

Aqui nesta tela, você deve selecionar sua instância de whatsapp, a plataforma que deseja integrar e configurar as [credenciais da sua plataforma (token)](#credenciais)

## Credenciais

### Eduzz

Copie seu token da Eduzz através [desse link](https://orbita.eduzz.com/producer/config-api) (Origin Key)

### Hotmart

Copie seu token da Hotmart através [desse link](https://app-vlc.hotmart.com/tools/webhook/auth) (Hottok)

### Active Campaign

Para integrar ao Active Campaign você não precisa informar nenhuma credencial


## Configurando os Webhooks

Após criar sua notificação, você será redirecionado para uma tela onde você deve configurar todas suas mensagens.

![alt](/img/docs/urlhook.png)

Após configurar suas mensagens, copie o URL que está sinalizado na imagem acima e siga as instruções conforme sua plataforma.

### Eduzz

Para configurar seu webhook na Eduzz, basta acessar [este link](https://orbita.eduzz.com/producer/webhook) e clicar em **Criar Webhook**, em seguida selecione seu produto e o URL e salve.

### Hotmart

Para configurar seu webhook na Hotmart, basta acessar [este link](https://app-vlc.hotmart.com/tools/webhook) e clicar em **Criar Configuração**, em seguida selecione seu produto, os eventos que deseja, o url, **selecione a versão 2.0** e por fim salve.

### Active Campaign

Para configurar seu webhook na Active Campaign, você precisa clicar em **Configurações** -> **Desenvolvedor** e clicar no botão **Gerenciar Webhooks**.

Em seguida, basta criar uma nova configuração selecionando os eventos que você configurou em nossa plataforma e pronto!
Se desejar, você pode selecionar listas de contatos específicas para um webhook