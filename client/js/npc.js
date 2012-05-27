
define(['character'], function(Character) {

    var NpcTalk = {
        "guard": [
            "Talent Surfers es un servicio online",
            "que busca conectar personas que quieren enseñar",
            "con personas que quieren aprender.",
            "Este servicio busca ser disruptivo",
            "en el espacio de la educación informal."
        ],
    
        "draka": [
            "Hola Tio",
            "Me llamo Draka, soy el jefe",
            "te doy la bienvenida a la Academia Wayra Virtual,",
            "esto es un ejecicio de una prueba de programacion de <a target=\"_blank\" href=\"https://twitter.com/#!/search/%23DeveloperDayo\">#developedDay</a>,",
            "puedes buscar info en internet y seguir a <a target=\"_blank\" href=\"https://twitter.com/#!/WayraCo\">@wayraco</a>"
        ],
    
        "villagegirl": [
            "Hola",
            "tomame tu tiempo recorriendo esta sala",
            "preguntale a todos cuales son sus proyectos"
        ],
    
        "villager": [
            "Codetag.me es un sitio web que reúne a los mejores desarrolladores de software",
            "para que demuestren y mejoren sus habilidades",
            "en programación de software a través de retos, concursos y código social.",
            "Codetag.me establece una experiencia de juego usando caminos de aprendizaje,",
            "niveles de experiencia y clasificaciones entre los desarrolladores,",
            "permitiendo que entre ellos se califiquen y midan la utilidad de sus aportes realizados",
            "como: código libre (github, googlecode, bitbucket),",
            "contenidos relevantes para el aprendizaje (blogs, stackoverflow, diaspora, p2pu.org )",
            "y la mejora de las habilidades de desarrollo "
        ],
    
        "agent": [
            "Wayra",
            "¿qué es Wayra?",
            "Estamos convencidos de que las oportunidades de crecimiento vienen de las ideas.",
            "Y de que Latinoamérica es un enorme generador de ideas y de talento.",
            "Un talento que no siempre encuentra el cauce,",
            "la financiación y el apoyo para ir adelante y,",
            "a menudo, recurre a la expatriación como única vía de desarrollo.",
            "De este convencimiento nace Wayra.",
            "Una iniciativa sin precedentes en el entorno latinoamericano",
            "que pretende conseguir un impacto relevante",
            "en la economía de los países en que opera."
        ],
    
        "rick": [
            "Hola",
            "soy el <a target=\"_blank\" href=\"https://twitter.com/#!/WayraCo\">@SenorPasajero</a>",
            "ando buscando a <a target=\"_blank\" href=\"https://twitter.com/#!/mjquall\">@mjquall</a>",
            "si la encuentras no dudes en informarme",
            "abrá una gratificación"
        ],
        
        "scientist": [
            "Brújula es una comunidad",
            "que permite a sus miembros interactuar y colaborar,",
            "para encontrar alternativas eficientes y seguras de movilidad en su ciudad.",
            "Permite compartir la capacidad ociosa de vehículos públicos y privados,",
            "y a la vez coordinar la solicitud de un servicio de transporte,",
            "a través de una comunicación de 2 vías entre usuarios y conductores."
        ],
    
        "nyan": [
            "nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan nyan nyan"
        ],
        
        "forestnpc": [
            "StartBull es un negocio web",
            "que nace en el interés de sus creadores",
            "de ofrecer una plataforma que democratice",
            "el conocimiento de los mercados de capitales",
            "a través de la creación de redes de personas interesadas e involucradas en el tema,",
            "facilitando la interconexión de diferentes puntos de vista y retroalimentación colectiva."
        ],
        
        "desertnpc": [
            "myband.is es un servicio que permite unificar la identidad digital una banda.",
            "Su funcionalidad principal es crear un sitio web",
            "integrando los contenidos de las redes sociales que usan las bandas.",
            "Una herramienta personalizable que además de intuitiva,",
            "ofrece excelentes acabados de diseño para las páginas creadas en la aplicación.",
            "Fácil de usar, bonita y gratuita.",
            "Así se ve la música en myband.is.",
            ".....",
            "También andamos <a target=\"_blank\" href=\"http://blog.myband.is/es/2012/05/busca-desarrollador/\">buscando desarrollador</a>"
        ],
        
        "lavanpc": [
            "tutalento.co es un sitio web,",
            "en el cual personas que tienen conocimientos específicos,",
            "facilidades o destrezas para ejecutar micro trabajos,",
            "puedan ofrecer sus servicios",
            "y así darles la posibilidad",
            "de producir dinero extra de una forma segura, fácil y divertida."
        ],
    
        "priest": [
            "File Cubed ofrece una mejor manera de encontrar,",
            "categorizar, compartir y versionar para sus archivos."
        ],
        
        "sorcerer": [
            "Thotz.co es una interfaz web para",
            "ayudar a pequeñas y medianas empresas,",
            "a manejar y compartir su información en la nube,",
            "para consumo interno y de toda su cadena de valor."
        ],
        
        "octocat": [
            "Hola Amiguito",
            "este proyecto se encuentra disponible en GitHub",
            'entra a <a target="_blank" href="https://github.com/Draka/wayraquest">https://github.com/Draka/wayraquest</a>',
            "Pasa y echale una ojeada al código"
        ],
        
        "coder": [
            "Hola, me llamo Arley",
            "estoy muy ocupado intentando recuperar una base de datos",
            "la borre y no supe como",
            "bueno, si se como, lo que no se es recuperarla",
            "¿sabes recuperar archivos de linux borrados?"
        ],
    
        "beachnpc": [
            "OpiNation es una plataforma social",
            "en la cual opinar es divertido,",
            "permitiendo a personas y marcas crear preguntas y recibir",
            "retroalimentación de su público objetivo",
            "en cuestión de minutos",
            "y por una fracción del costo",
            "que tendría utilizando métodos de investigación de mercados tradicional."
        ],
        
        "othernpc": [
            "lorem ipsum",
            "lorem ipsum"
        ]
    };

    var Npc = Character.extend({
        init: function(id, kind) {
            this._super(id, kind, 1);
            this.itemKind = Types.getKindAsString(this.kind);
            this.talkCount = NpcTalk[this.itemKind].length;
            this.talkIndex = 0;
        },
    
        talk: function() {
            var msg = null;
        
            if(this.talkIndex > this.talkCount) {
                this.talkIndex = 0;
            }
            if(this.talkIndex < this.talkCount) {
                msg = NpcTalk[this.itemKind][this.talkIndex];
            }
            this.talkIndex += 1;
            
            return msg;
        }
    });
    
    return Npc;
});