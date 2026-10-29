/* ============================================================
   葡萄牙语（巴西 PT-BR）外贸沟通速成 —— 课程数据
   字段：pt 葡语原文 | pron 中文谐音提示 | zh 中文意思 | note 备注
   ============================================================ */

const COURSE = {
  meta: {
    title: "葡萄牙语外贸沟通速成",
    subtitle: "巴西葡语 PT-BR · 从零到和客户顺利沟通",
    lang: "pt-BR",
  },

  modules: [
    /* ---------- 模块 1：基础与问候 ---------- */
    {
      id: "basics",
      name: "1 · 基础与问候",
      icon: "👋",
      sections: [
        {
          title: "字母与发音（巴西葡语要点）",
          type: "phrase",
          items: [
            { pt: "A a", pron: "阿", zh: "开口音，类似中文“阿”" },
            { pt: "E e", pron: "诶/伊", zh: "词尾常弱读成“伊”，如 cliente" },
            { pt: "O o", pron: "欧/乌", zh: "词尾常弱读成“乌”，如 tempo" },
            { pt: "R r", pron: "赫/哈", zh: "词首或 rr 发大舌“赫”；词中单 r 轻弹" },
            { pt: "NH nh", pron: "尼/嗯-y", zh: "鼻音，如 manhã（早晨）" },
            { pt: "LH lh", pron: "利/李", zh: "如 mulher（女人）" },
            { pt: "Ç ç", pron: "s", zh: "发“s”，如 preço（价格）" },
            { pt: "ã õ", pron: "鼻音", zh: "鼻化元音，如 não（不）" },
            { pt: "Acento tônico", pron: "阿森托 托尼库", zh: "重音规则：带 ´ 重读；无符号倒数第二音节重读；ã/õ/!/? 结尾倒数第一重读" },
          ],
        },
        {
          title: "日常问候",
          type: "phrase",
          items: [
            { pt: "Olá", pron: "欧拉", zh: "你好" },
            { pt: "Bom dia", pron: "崩 迪亚", zh: "早上好" },
            { pt: "Boa tarde", pron: "波亚 塔尔季", zh: "下午好" },
            { pt: "Boa noite", pron: "波亚 诺伊季", zh: "晚上好 / 晚安" },
            { pt: "Tudo bem?", pron: "图多 本", zh: "还好吗？" },
            { pt: "Estou bem, obrigado.", pron: "伊斯托 本，欧布里加多", zh: "我很好，谢谢（男 obrigado，女 obrigada）" },
            { pt: "E você?", pron: "伊 沃塞", zh: "你呢？" },
            { pt: "Como vai?", pron: "科莫 瓦伊", zh: "最近怎样？" },
            { pt: "Tchau", pron: "翘", zh: "再见" },
            { pt: "Até logo", pron: "阿代 洛古", zh: "回头见" },
          ],
        },
        {
          title: "礼貌用语（高频！）",
          type: "phrase",
          items: [
            { pt: "Por favor", pron: "波尔 法沃尔", zh: "请" },
            { pt: "Obrigado / Obrigada", pron: "欧布里加多/达", zh: "谢谢（男/女）" },
            { pt: "De nada", pron: "季 纳达", zh: "不客气" },
            { pt: "Desculpe", pron: "德斯库尔皮", zh: "抱歉 / 打扰了" },
            { pt: "Com licença", pron: "孔 利森萨", zh: "借过 / 失陪" },
            { pt: "Não entendo", pron: "闹 恩滕多", zh: "我听不懂" },
            { pt: "Pode repetir?", pron: "波季 赫佩蒂尔", zh: "能重复一遍吗？" },
            { pt: "Mais devagar, por favor", pron: "玛伊斯 代瓦加尔", zh: "请慢一点" },
          ],
        },
        {
          title: "自我介绍",
          type: "phrase",
          items: [
            { pt: "Eu me chamo ...", pron: "欧 米 沙莫", zh: "我叫……" },
            { pt: "Sou da empresa ...", pron: "索 达 恩普雷扎", zh: "我来自……公司" },
            { pt: "Somos fabricantes", pron: "索莫斯 法布里康季斯", zh: "我们是制造商" },
            { pt: "Trabalhamos com exportação", pron: "特拉利亚莫斯 孔 埃斯波尔塔桑", zh: "我们做出口贸易" },
            { pt: "Muito prazer", pron: "穆因托 普拉泽尔", zh: "很高兴认识您" },
            { pt: "Qual é o seu nome?", pron: "夸尔 埃 乌 塞乌 诺米", zh: "您叫什么名字？" },
            { pt: "De onde você é?", pron: "季 翁季 沃塞 埃", zh: "您来自哪里？" },
          ],
        },
        {
          title: "人称代词",
          type: "phrase",
          items: [
            { pt: "eu", pron: "欧", zh: "我" },
            { pt: "você", pron: "沃塞", zh: "你 / 您（商务中常称呼客户）" },
            { pt: "ele / ela", pron: "埃利 / 埃拉", zh: "他 / 她" },
            { pt: "nós", pron: "诺斯", zh: "我们" },
            { pt: "vocês", pron: "沃塞斯", zh: "你们 / 您们" },
          ],
        },
      ],
    },

    /* ---------- 模块 2：核心词汇 ---------- */
    {
      id: "vocab",
      name: "2 · 核心词汇",
      icon: "📦",
      sections: [
        {
          title: "数字 0–100（报价必背）",
          type: "phrase",
          items: [
            { pt: "0 zero", pron: "泽罗", zh: "0" },
            { pt: "1 um / 2 dois / 3 três", pron: "翁 / 多伊斯 / 特雷斯", zh: "1 / 2 / 3" },
            { pt: "4 quatro / 5 cinco", pron: "夸特罗 / 辛库", zh: "4 / 5" },
            { pt: "6 seis / 7 sete", pron: "塞伊斯 / 塞特", zh: "6 / 7" },
            { pt: "8 oito / 9 nove", pron: "奥伊托 / 诺维", zh: "8 / 9" },
            { pt: "10 dez / 20 vinte", pron: "代斯 / 温季", zh: "10 / 20" },
            { pt: "50 cinquenta", pron: "辛昆塔", zh: "50" },
            { pt: "100 cem / cento", pron: "森 / 森托", zh: "100" },
            { pt: "1.000 mil", pron: "米尔", zh: "1,000" },
            { pt: "1.000.000 um milhão", pron: "翁 米良", zh: "1,000,000" },
          ],
        },
        {
          title: "时间 · 日期",
          type: "phrase",
          items: [
            { pt: "hoje", pron: "奥日", zh: "今天" },
            { pt: "amanhã", pron: "阿曼尼亚", zh: "明天" },
            { pt: "depois de amanhã", pron: "代波伊斯 季 阿曼尼亚", zh: "后天" },
            { pt: "semana", pron: "塞马纳", zh: "星期 / 周" },
            { pt: "mês", pron: "梅斯", zh: "月" },
            { pt: "ano", pron: "阿努", zh: "年" },
            { pt: "agora", pron: "阿戈拉", zh: "现在" },
            { pt: "cedo", pron: "塞多", zh: "早" },
            { pt: "tarde", pron: "塔尔季", zh: "晚 / 下午" },
            { pt: "Que horas são?", pron: "基 奥拉斯 桑", zh: "几点了？" },
          ],
        },
        {
          title: "金钱 · 价格",
          type: "phrase",
          items: [
            { pt: "preço", pron: "普雷苏", zh: "价格" },
            { pt: "Reais (R$)", pron: "赫艾斯", zh: "巴西雷亚尔（货币）" },
            { pt: "Dólar (US$)", pron: "多拉尔", zh: "美元" },
            { pt: "Quanto custa?", pron: "宽托 库斯塔", zh: "多少钱？" },
            { pt: "É muito caro", pron: "埃 穆因托 卡鲁", zh: "太贵了" },
            { pt: "Podemos negociar o preço?", pron: "波代莫斯 内戈西亚尔", zh: "我们可以谈价格吗？" },
            { pt: "desconto", pron: "代斯孔托", zh: "折扣" },
            { pt: "grátis / frete grátis", pron: "格拉季斯", zh: "免费 / 包邮" },
          ],
        },
        {
          title: "产品 · 电商高频词",
          type: "phrase",
          items: [
            { pt: "produto", pron: "普罗杜托", zh: "产品" },
            { pt: "amostra", pron: "阿莫斯特拉", zh: "样品" },
            { pt: "pedido", pron: "佩季多", zh: "订单" },
            { pt: "estoque", pron: "埃斯托基", zh: "库存" },
            { pt: "tamanho", pron: "塔曼纽", zh: "尺寸 / 尺码" },
            { pt: "cor", pron: "科尔", zh: "颜色" },
            { pt: "material", pron: "马泰里亚尔", zh: "材质" },
            { pt: "qualidade", pron: "夸利达季", zh: "质量" },
            { pt: "embalagem", pron: "恩巴拉日", zh: "包装" },
            { pt: "catálogo", pron: "卡塔洛古", zh: "产品目录" },
            { pt: "foto / imagem", pron: "福托 / 伊马任", zh: "照片 / 图片" },
            { pt: "link", pron: "林基", zh: "链接" },
          ],
        },
      ],
    },

  /* ---------- 模块 3：外贸实战场景（重点） ---------- */
  {
    id: "trade",
    name: "3 · 外贸实战场景",
    icon: "💼",
    sections: [
      {
        title: "① 收到询盘 Inquiry",
        type: "phrase",
        items: [
          { pt: "Obrigado pelo seu interesse.", pron: "欧布里加多 佩洛 塞乌 因特雷塞", zh: "感谢您的关注。" },
          { pt: "Recebemos sua mensagem.", pron: "赫塞贝莫斯 苏阿 门萨任", zh: "我们已收到您的消息。" },
          { pt: "Você pode enviar o modelo?", pron: "沃塞 波季 恩维阿 乌 莫代洛", zh: "您可以发一下型号吗？" },
          { pt: "Qual quantidade você precisa?", pron: "夸尔 宽蒂达季 沃塞 普雷西扎", zh: "您需要多少数量？" },
          { pt: "Qual é o seu orçamento?", pron: "夸尔 埃 乌 塞乌 奥尔桑图", zh: "您的预算是多少？" },
          { pt: "Podemos enviar o catálogo.", pron: "波代莫斯 恩维阿 乌 卡塔洛古", zh: "我们可以发送产品目录。" },
          { pt: "Aguardamos sua resposta.", pron: "阿瓜达莫斯 苏阿 赫斯波斯塔", zh: "我们等待您的回复。" },
        ],
      },
      {
        title: "② 报价 Quotation",
        type: "phrase",
        items: [
          { pt: "Aqui está o nosso preço.", pron: "阿基 埃斯塔 乌 诺苏 普雷苏", zh: "这是我们的价格。" },
          { pt: "O preço é por peça.", pron: "乌 普雷苏 埃 波尔 佩萨", zh: "价格按每件计算。" },
          { pt: "Preço FOB / CIF", pron: "普雷苏 福布 / 西夫", zh: "FOB / CIF 价格条款" },
          { pt: "Inclui o frete?", pron: "因克卢伊 乌 弗雷季", zh: "包含运费吗？" },
          { pt: "O preço é fixo.", pron: "乌 普雷苏 埃 菲克苏", zh: "价格是固定的。" },
          { pt: "Podemos dar um desconto.", pron: "波代莫斯 达尔 翁 代斯孔托", zh: "我们可以给一些折扣。" },
          { pt: "Para pedidos grandes, tem desconto.", pron: "帕拉 佩季多斯 格兰季斯", zh: "大订单有折扣。" },
        ],
      },
      {
        title: "③ 样品 Samples",
        type: "phrase",
        items: [
          { pt: "Podemos enviar amostras.", pron: "波代莫斯 恩维阿 阿莫斯特拉斯", zh: "我们可以寄样品。" },
          { pt: "A amostra é grátis.", pron: "阿 阿莫斯特拉 埃 格拉季斯", zh: "样品免费。" },
          { pt: "O frete da amostra é por conta sua.", pron: "乌 弗雷季 达 阿莫斯特拉", zh: "样品运费由您承担。" },
          { pt: "Quanto tempo para a amostra?", pron: "宽托 坦普 帕拉 阿 阿莫斯特拉", zh: "样品要多久？" },
          { pt: "Em 3 dias úteis.", pron: "恩 特雷斯 迪亚斯 乌季斯", zh: "3 个工作日内。" },
        ],
      },
      {
        title: "④ 谈判与折扣 Negotiation",
        type: "phrase",
        items: [
          { pt: "É muito caro para nós.", pron: "埃 穆因托 卡鲁 帕拉 诺斯", zh: "对我们来说太贵了。" },
          { pt: "Podemos negociar?", pron: "波代莫斯 内戈西亚尔", zh: "我们可以谈谈吗？" },
          { pt: "Qual é o seu melhor preço?", pron: "夸尔 埃 乌 塞乌 梅柳 普雷苏", zh: "您的最优价是多少？" },
          { pt: "Se o pedido for grande, baixamos o preço.", pron: "塞 乌 佩季多 福尔 格兰季", zh: "如果订单大，我们降价。" },
          { pt: "Não podemos baixar mais.", pron: "闹 波代莫斯 巴伊夏尔 玛伊斯", zh: "我们不能再降了。" },
          { pt: "Aceitamos esse preço.", pron: "阿塞塔莫斯 埃西 普雷苏", zh: "我们接受这个价格。" },
        ],
      },
      {
        title: "⑤ 订单与起订量 Order & MOQ",
        type: "phrase",
        items: [
          { pt: "Quero fazer um pedido.", pron: "凯罗 法泽尔 翁 佩季多", zh: "我想下订单。" },
          { pt: "Qual é o pedido mínimo (MOQ)?", pron: "夸尔 埃 乌 佩季多 米尼莫", zh: "最小起订量是多少？" },
          { pt: "Podemos aceitar pedido pequeno.", pron: "波代莫斯 阿塞塔尔 佩季多 佩凯诺", zh: "我们可以接受小订单。" },
          { pt: "Confirme o pedido, por favor.", pron: "孔菲尔米 乌 佩季多", zh: "请确认订单。" },
          { pt: "Enviamos a fatura.", pron: "恩维阿莫斯 阿 法图拉", zh: "我们发送发票。" },
          { pt: "O pedido está pronto.", pron: "乌 佩季多 埃斯塔 普龙托", zh: "订单已就绪。" },
        ],
      },
      {
        title: "⑥ 付款方式 Payment",
        type: "phrase",
        items: [
          { pt: "Qual forma de pagamento?", pron: "夸尔 福尔马 季 帕加门托", zh: "什么付款方式？" },
          { pt: "Aceitamos T/T (transferência).", pron: "阿塞塔莫斯 特/特 特兰斯费伦西亚", zh: "我们接受电汇（T/T）。" },
          { pt: "Aceitamos PayPal / cartão.", pron: "阿塞塔莫斯 帕伊帕尔 / 卡尔唐", zh: "我们接受 PayPal / 信用卡。" },
          { pt: "30% adiantado, 70% antes do envio.", pron: "特伦塔 波尔森托 阿迪安塔多", zh: "30% 预付，70% 发货前付清。" },
          { pt: "O pagamento foi recebido.", pron: "乌 帕加门托 福伊 赫塞贝多", zh: "款项已收到。" },
          { pt: "Você já pagou?", pron: "沃塞 雅 帕戈乌", zh: "您已经付款了吗？" },
        ],
      },
      {
        title: "⑦ 生产周期 Lead Time",
        type: "phrase",
        items: [
          { pt: "Qual é o prazo de produção?", pron: "夸尔 埃 乌 普拉祖 季 普罗杜桑", zh: "生产周期多久？" },
          { pt: "Levamos 15 dias.", pron: "莱瓦莫斯 quinze 迪亚斯", zh: "我们需要 15 天。" },
          { pt: "Quando fica pronto?", pron: "宽多 菲卡 普龙托", zh: "什么时候能好？" },
          { pt: "A produção começou.", pron: "阿 普罗杜桑 科梅索乌", zh: "生产已经开始了。" },
          { pt: "Está em produção.", pron: "埃斯塔 恩 普罗杜桑", zh: "正在生产中。" },
          { pt: "Vamos terminar na próxima semana.", pron: "瓦莫斯 特尔米纳尔 纳 普罗西马 塞马纳", zh: "我们下周完成。" },
        ],
      },
      {
        title: "⑧ 物流与发货 Shipping",
        type: "phrase",
        items: [
          { pt: "Como você quer o envio?", pron: "科莫 沃塞 凯尔 乌 恩维乌", zh: "您想要怎么发货？" },
          { pt: "Por mar / ar / expresso.", pron: "波尔 马尔 / 阿尔 / 埃斯普雷苏", zh: "海运 / 空运 / 快递。" },
          { pt: "Qual é o prazo de entrega?", pron: "夸尔 埃 乌 普拉祖 季 恩特雷加", zh: "交货期多久？" },
          { pt: "Enviamos hoje.", pron: "恩维阿莫斯 奥日", zh: "我们今天发货。" },
          { pt: "Aqui está o código de rastreamento.", pron: "阿基 埃斯塔 乌 科迪古 季 哈斯特雷阿门托", zh: "这是物流跟踪号。" },
          { pt: "O pacote chegou?", pron: "乌 帕凯季 谢戈乌", zh: "包裹到了吗？" },
          { pt: "Aduana / alfândega", pron: "阿杜阿纳 / 阿尔方季加", zh: "海关" },
        ],
      },
      {
        title: "⑨ 包装 Packaging",
        type: "phrase",
        items: [
          { pt: "Como devemos embalar?", pron: "科莫 代韦莫斯 恩巴拉尔", zh: "我们应该怎么包装？" },
          { pt: "Embalagem neutra.", pron: "恩巴拉日 涅特拉", zh: "中性包装。" },
          { pt: "Caixa de presente.", pron: "卡伊夏 季 普雷曾季", zh: "礼品盒。" },
          { pt: "Precisa de etiqueta?", pron: "普雷西扎 季 埃蒂凯塔", zh: "需要标签吗？" },
          { pt: "Embalagem à prova d'água.", pron: "恩巴拉日 阿 普罗瓦 达瓜", zh: "防水包装。" },
        ],
      },
      {
        title: "⑩ 售后与投诉 After-sales",
        type: "phrase",
        items: [
          { pt: "Temos garantia de 1 ano.", pron: "泰莫斯 甘兰西亚 季 翁 阿努", zh: "我们有 1 年保修。" },
          { pt: "A qualidade não está boa.", pron: "阿 夸利达季 闹 埃斯塔 波亚", zh: "质量不好。" },
          { pt: "Alguns produtos vieram com defeito.", pron: "阿尔古斯 普罗杜托斯 维埃兰 孔 代费伊图", zh: "有些产品有瑕疵。" },
          { pt: "Podemos trocar ou reembolsar.", pron: "波代莫斯 特罗卡尔 奥 赫恩博尔萨尔", zh: "我们可以换货或退款。" },
          { pt: "Vamos resolver o problema.", pron: "瓦莫斯 赫佐尔韦尔 乌 普罗布莱马", zh: "我们会解决问题。" },
          { pt: "Envie fotos do defeito.", pron: "恩维伊 福托斯 杜 代费伊图", zh: "请发瑕疵照片。" },
        ],
      },
    ],
  },

  /* ---------- 模块 4：邮件与消息模板 ---------- */
  {
    id: "templates",
    name: "4 · 邮件/消息模板",
    icon: "✉️",
    sections: [
      {
        title: "询盘回复模板",
        type: "template",
        items: [
          { pt: "Prezado(a) [Nome],", pron: "——", zh: "尊敬的 [姓名]：" },
          { pt: "Obrigado pelo seu contato.", pron: "——", zh: "感谢您的联系。" },
          { pt: "Segue em anexo nosso catálogo e lista de preços.", pron: "——", zh: "附件中是我们的目录和价目表。" },
          { pt: "Aguardamos seu pedido.", pron: "——", zh: "期待您的订单。" },
          { pt: "Atenciosamente,", pron: "——", zh: "此致，" },
          { pt: "[Seu Nome / Empresa]", pron: "——", zh: "[您的名字 / 公司]" },
        ],
      },
      {
        title: "发货通知模板",
        type: "template",
        items: [
          { pt: "Olá [Nome],", pron: "——", zh: "您好 [姓名]，" },
          { pt: "Seu pedido foi enviado hoje.", pron: "——", zh: "您的订单今天已发出。" },
          { pt: "Código de rastreamento: [número]", pron: "——", zh: "物流跟踪号：[号码]" },
          { pt: "Previsão de entrega: [data].", pron: "——", zh: "预计送达：[日期]。" },
          { pt: "Qualquer dúvida, estamos à disposição.", pron: "——", zh: "如有疑问，随时联系我们。" },
        ],
      },
      {
        title: "常用句子拼接（可直接套用）",
        type: "phrase",
        items: [
          { pt: "Por favor, confirme...", pron: "波尔 法沃尔，孔菲尔米", zh: "请确认……（后接：o preço 价格 / a quantidade 数量 / o endereço 地址）" },
          { pt: "Enviaremos em...", pron: "恩维阿雷莫斯 恩", zh: "我们将在……发送（后接：3 dias 3天 / uma semana 一周）" },
          { pt: "Precisamos de...", pron: "普雷西扎莫斯 季", zh: "我们需要……（后接：seu endereço 您的地址 / o CNPJ 税号）" },
          { pt: "Obrigado pela confiança.", pron: "欧布里加多 帕拉 孔菲安萨", zh: "感谢您的信任。" },
        ],
      },
    ],
  },

  /* ---------- 模块 5：即时沟通（WhatsApp / 聊天） ---------- */
  {
    id: "chat",
    name: "5 · 即时沟通短句",
    icon: "💬",
    sections: [
      {
        title: "常用回复",
        type: "phrase",
        items: [
          { pt: "Recebi sua mensagem.", pron: "赫塞比 苏阿 门萨任", zh: "我收到您的消息了。" },
          { pt: "Já vou responder.", pron: "雅 沃伊 赫斯蓬德尔", zh: "我这就回复您。" },
          { pt: "Por favor, aguarde um momento.", pron: "波尔 法沃尔，阿瓜尔季 翁 莫门托", zh: "请稍等一下。" },
          { pt: "Vou confirmar com a fábrica.", pron: "沃伊 孔菲尔马尔 孔 阿 法布里卡", zh: "我跟工厂确认一下。" },
          { pt: "Deixe seu WhatsApp.", pron: "代西 塞乌 瓦茨阿普", zh: "请留一下您的 WhatsApp。" },
          { pt: "Posso ligar para você?", pron: "波苏 利加尔 帕拉 沃塞", zh: "我可以给您打个电话吗？" },
          { pt: "Enviarei o vídeo / foto.", pron: "恩维阿雷伊 乌 维季乌 / 福托", zh: "我会把视频 / 照片发给您。" },
          { pt: "Obrigado pela paciência.", pron: "欧布里加多 帕拉 帕西门西亚", zh: "感谢您的耐心。" },
        ],
      },
      {
        title: "跟进与催促",
        type: "phrase",
        items: [
          { pt: "Você já decidiu?", pron: "沃塞 雅 代西迪乌", zh: "您决定好了吗？" },
          { pt: "Aguardamos seu pedido.", pron: "阿瓜达莫斯 塞乌 佩季多", zh: "我们等待您的订单。" },
          { pt: "O preço é válido por 7 dias.", pron: "乌 普雷苏 埃 瓦利杜 波尔 7 迪亚斯", zh: "此价格 7 天内有效。" },
          { pt: "Precisamos confirmar hoje.", pron: "普雷西扎莫斯 孔菲尔马尔 奥日", zh: "我们今天需要确认。" },
          { pt: "Espero sua resposta.", pron: "埃斯佩罗 苏阿 赫斯波斯塔", zh: "我等您的回复。" },
        ],
      },
    ],
  },

  /* ---------- 模块 6：单据与文件 ---------- */
  {
    id: "docs",
    name: "6 · 单据与文件",
    icon: "📄",
    sections: [
      {
        title: "单据名称",
        type: "phrase",
        items: [
          { pt: "Proforma Invoice (PI)", pron: "——", zh: "形式发票（下单前报价确认用）" },
          { pt: "Fatura comercial", pron: "法图拉 科梅西亚尔", zh: "商业发票" },
          { pt: "Lista de embalagem", pron: "利斯塔 季 恩巴拉日", zh: "装箱单 (Packing List)" },
          { pt: "Conhecimento de Embarque (BL)", pron: "科涅西门托 季 恩巴尔基", zh: "提单" },
          { pt: "CNPJ", pron: "塞-恩-热-佩-若塔", zh: "巴西公司税号（交易必填）" },
          { pt: "CPF", pron: "塞-佩-埃菲", zh: "巴西个人税号" },
          { pt: "Código HS", pron: "科迪古 阿-吉-埃-西", zh: "海关商品编码" },
          { pt: "Certificado de origem", pron: "塞尔蒂菲卡多 季 奥里任", zh: "原产地证书" },
          { pt: "Seguro", pron: "塞古鲁", zh: "保险" },
        ],
      },
      {
        title: "清关与税费",
        type: "phrase",
        items: [
          { pt: "Imposto de importação", pron: "因帕斯托 季 因波尔塔桑", zh: "进口关税" },
          { pt: "Despachante aduaneiro", pron: "代斯帕尚季 阿杜阿内鲁", zh: "报关行" },
          { pt: "O imposto é pago no Brasil.", pron: "乌 因帕斯托 埃 帕古 努 布拉济尔", zh: "税费在巴西由您承担。" },
          { pt: "Precisamos do seu CNPJ.", pron: "普雷西扎莫斯 杜 塞乌 塞恩热佩若塔", zh: "我们需要您的 CNPJ 税号。" },
          { pt: "A mercadoria está na alfândega.", pron: "阿 梅尔卡多里亚 埃斯塔 纳 阿尔方季加", zh: "货物在海关（清关中）。" },
        ],
      },
    ],
  },

  /* ---------- 模块 7：常用动词速查 ---------- */
  {
    id: "verbs",
    name: "7 · 常用动词速查",
    icon: "🔧",
    sections: [
      {
        title: "现在时第三人称（最常用）",
        type: "phrase",
        items: [
          { pt: "ser = é", pron: "埃", zh: "是（本质、属性）" },
          { pt: "estar = está", pron: "埃斯塔", zh: "在 / 处于（状态、位置）" },
          { pt: "ter = tem", pron: "滕", zh: "有" },
          { pt: "fazer = faz", pron: "法斯", zh: "做 / 制造" },
          { pt: "querer = quer", pron: "凯尔", zh: "想要" },
          { pt: "poder = pode", pron: "波季", zh: "能够" },
          { pt: "ir = vai", pron: "瓦伊", zh: "去 / 将要" },
          { pt: "enviar = envia", pron: "恩维亚", zh: "发送" },
          { pt: "precisar = precisa", pron: "普雷西扎", zh: "需要" },
          { pt: "gostar = gosta", pron: "戈斯塔", zh: "喜欢" },
        ],
      },
    ],
  },

  /* ---------- 模块 8：展会与视频会议 ---------- */
  {
    id: "meeting",
    name: "8 · 展会与会议",
    icon: "🎤",
    sections: [
      {
        title: "展会 / 客户接待",
        type: "phrase",
        items: [
          { pt: "Bem-vindo ao nosso estande.", pron: "本 维恩多 奥 诺苏 埃斯坦季", zh: "欢迎来到我们的展位。" },
          { pt: "Qual produto lhe interessa?", pron: "夸尔 普罗杜托 利 因特雷萨", zh: "您对哪类产品感兴趣？" },
          { pt: "Aqui está nosso catálogo.", pron: "阿基 埃斯塔 诺苏 卡塔洛古", zh: "这是我们的产品目录。" },
          { pt: "Temos novos modelos este ano.", pron: "泰莫斯 诺沃斯 莫代洛斯 埃斯季 阿努", zh: "今年我们有新款式。" },
          { pt: "Enviamos amostras após a feira.", pron: "恩维阿莫斯 阿莫斯特拉斯 阿波斯 阿 费拉", zh: "展会后我们寄样品。" },
        ],
      },
      {
        title: "视频 / 电话会议",
        type: "phrase",
        items: [
          { pt: "Podemos fazer uma videochamada?", pron: "波代莫斯 法泽尔 乌马 维季奥夏马达", zh: "我们可以开个视频会议吗？" },
          { pt: "Compartilhe sua tela, por favor.", pron: "孔帕尔蒂利 苏阿 泰拉", zh: "请共享一下您的屏幕。" },
          { pt: "Você pode falar mais devagar?", pron: "沃塞 波季 法拉 玛伊斯 代瓦加尔", zh: "您能说慢一点吗？" },
          { pt: "Você entendeu?", pron: "沃塞 恩滕迪乌", zh: "您明白了吗？" },
          { pt: "Vou enviar a apresentação.", pron: "沃伊 恩维阿 阿 阿普雷曾塔桑", zh: "我把演示文稿发您。" },
          { pt: "Podemos marcar uma reunião?", pron: "波代莫斯 马卡尔 乌马 赫乌尼亚", zh: "我们可以约个会议吗？" },
        ],
      },
    ],
  },

  /* ---------- 模块 9：汽车设备词库 ---------- */
  {
    id: "auto",
    name: "9 · 汽车设备词库",
    icon: "🚗",
    sections: [
      {
        title: "汽车部件（Auto Peças）",
        type: "phrase",
        items: [
          { pt: "motor", pron: "莫托尔", zh: "发动机" },
          { pt: "freio", pron: "弗雷尤", zh: "刹车" },
          { pt: "pastilha de freio", pron: "帕斯季利亚 季 弗雷尤", zh: "刹车片" },
          { pt: "disco de freio", pron: "季斯库 季 弗雷尤", zh: "刹车盘" },
          { pt: "bateria / bateria automotiva", pron: "巴特里亚", zh: "电瓶 / 汽车蓄电池" },
          { pt: "pneu", pron: "普内乌", zh: "轮胎" },
          { pt: "roda", pron: "霍达", zh: "轮毂 / 车轮" },
          { pt: "óleo do motor", pron: "奥柳 杜 莫托尔", zh: "机油" },
          { pt: "filtro de óleo", pron: "菲尔特罗 季 奥柳", zh: "机油滤清器" },
          { pt: "filtro de ar", pron: "菲尔特罗 季 阿尔", zh: "空气滤清器" },
          { pt: "vela de ignição", pron: "韦拉 季 伊格尼桑", zh: "火花塞" },
          { pt: "amortecedor", pron: "阿莫尔泰塞多尔", zh: "减震器" },
          { pt: "suspensão", pron: "苏斯潘桑", zh: "悬挂" },
          { pt: "embreagem", pron: "恩布雷亚任", zh: "离合器" },
          { pt: "radiador", pron: "哈迪亚多尔", zh: "散热器 / 水箱" },
          { pt: "alternador", pron: "阿尔泰尔纳多尔", zh: "发电机（交流）" },
          { pt: "motor de arranque", pron: "莫托尔 季 阿兰季", zh: "起动机" },
          { pt: "correia dentada", pron: "科雷亚 登塔达", zh: "正时皮带" },
          { pt: "farol", pron: "法罗尔", zh: "大灯" },
          { pt: "para-choque", pron: "帕拉 绍基", zh: "保险杠" },
          { pt: "espelho retrovisor", pron: "埃斯佩柳 赫特罗维索尔", zh: "后视镜" },
        ],
      },
      {
        title: "汽修设备与工具（Equipamentos）",
        type: "phrase",
        items: [
          { pt: "scanner automotivo", pron: "埃斯卡内尔 奥托莫蒂沃", zh: "汽车诊断仪 / OBD 检测仪" },
          { pt: "elevador de carro", pron: "埃莱瓦多尔 季 卡胡", zh: "汽车举升机" },
          { pt: "macaco", pron: "马卡库", zh: "千斤顶" },
          { pt: "compressor de ar", pron: "孔普雷索尔 季 阿尔", zh: "空气压缩机" },
          { pt: "ferramenta", pron: "费拉门塔", zh: "工具" },
          { pt: "chave de fenda", pron: "夏维 季 芬达", zh: "螺丝刀" },
          { pt: "chave inglesa", pron: "夏维 因格列萨", zh: "活动扳手" },
          { pt: "oficina mecânica", pron: "奥菲西纳 梅卡尼卡", zh: "汽修厂 / 修理店" },
          { pt: "equipamento de oficina", pron: "埃基帕门托 季 奥菲西纳", zh: "汽修店设备" },
        ],
      },
      {
        title: "汽车商贸常用句",
        type: "phrase",
        items: [
          { pt: "Peças automotivas", pron: "佩萨斯 奥托莫蒂瓦斯", zh: "汽车配件" },
          { pt: "Para qual modelo de carro?", pron: "帕拉 夸尔 莫代洛 季 卡胡", zh: "用于哪款车型？" },
          { pt: "Temos peças para Honda, Toyota, VW.", pron: "泰莫斯 佩萨斯 帕拉 洪达", zh: "我们有本田、丰田、大众的配件。" },
          { pt: "Original ou paralela?", pron: "奥里希纳尔 奥 帕拉莱拉", zh: "原厂件还是副厂件？" },
          { pt: "Garantia de 1 ano.", pron: "加兰西亚 季 翁 阿努", zh: "质保 1 年。" },
          { pt: "Enviarei o catálogo de peças.", pron: "恩维阿雷伊 乌 卡塔洛古 季 佩萨斯", zh: "我把配件目录发给您。" },
          { pt: "Qual a marca do veículo?", pron: "夸尔 阿 马尔卡 杜 韦库洛", zh: "车辆是什么品牌？" },
          { pt: "Compatível com o seu modelo?", pron: "孔帕蒂维尔 孔 乌 塞乌 莫代洛", zh: "与您的车型兼容吗？" },
        ],
      },
    ],
  },
  ],

};
