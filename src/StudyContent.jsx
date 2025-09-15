import { useState } from "react";
import { TextAaIcon, MinusCircleIcon, PlusCircleIcon, MoonIcon, SunIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";

export function StudyContent() {
    const [index, setIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(false)
    const sizes = ["base", "xl", "2xl"];
    const titleSizes = ["xl", "2xl", "3xl"];

    function increaseFontSize() {

        setIndex((prev) => prev < sizes.length - 1 ? prev + 1 : prev = 2)
    }
    function decreaseFontSize() {
        setIndex((prev) => prev > 0 ? prev - 1 : prev = 0)
    }
    function applyDarkMode() {
        setDarkMode(true)
    }
    function removeDarkMode() {
        setDarkMode(false)
    }


    return (

        <div className={`p-2 ${darkMode ? "dark:bg-gray-900 dark:text-gray-200" : ""}`}>
            <div className="flex justify-between sticky top-0 opacity-85">
                <div className="flex gap-4 bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-2xl">
                    <button>
                        <SunIcon
                            size={28}
                            onClick={removeDarkMode}
                            weight={`${!darkMode ? "fill" : "regular"}`}

                        />
                    </button>
                    <button>
                        <MoonIcon
                            size={28}
                            onClick={applyDarkMode}
                            weight={`${darkMode ? "fill" : "regular"}`}
                        />
                    </button>
                </div>

                <div className="flex gap-2 bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-2xl">
                    <button>
                        <MinusCircleIcon
                            onClick={decreaseFontSize}
                            size={28}
                        />
                    </button>
                    <TextAaIcon size={28} />
                    <button>
                        <PlusCircleIcon
                            size={28}
                            onClick={() => increaseFontSize()}
                        />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Série de Estudos DNA</h2>
                <img className="w-26" src="ensino_logo.png" alt="Logo do curso Ensino" />
            </div>
            <div className={`text-${sizes[index]} leading-relaxed space-y-4 font-montserrat`}>
                <h1 className="text-3xl font-semibold">
                    Estudo 3 – A Âncora da Alma – Sustentados pela Esperança
                </h1>

                <p>
                    Quando enfrentamos sofrimento emocional, muitas vezes sentimos que não há saída.
                    Mas a esperança em Cristo é o que nos mantém firmes. Jeremias, mesmo em lágrimas, declarou:
                    “Todavia, lembro-me disto e por isso tenho esperança: o amor do Senhor nunca cessa”
                    (<b>Lamentações 3:21-22</b>).
                </p>

                <p>
                    A esperança bíblica não é um otimismo vazio ou um desejo frágil de que tudo dará certo, mas sim
                    uma confiança inabalável no caráter de Deus e nas promessas que Ele já cumpriu em Cristo.
                    O autor de Hebreus afirma: “Temos essa esperança como âncora da alma, firme e segura”
                    (<b>Hebreus 6:19</b>).
                </p>

                <p>
                    Assim como uma âncora impede que o barco seja levado pelas ondas e tempestades, a esperança em
                    Jesus mantém nosso coração firme em meio às lutas e incertezas da vida.
                </p>

                <p>
                    Na cruz, Jesus conquistou não apenas o perdão dos pecados, mas também a vitória sobre a morte e o
                    desespero. É por isso que o apóstolo Pedro declara:
                    “Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo! Conforme a sua grande misericórdia, ele
                    nos regenerou para uma esperança viva, por meio da ressurreição de Jesus Cristo dentre os mortos”
                    (<b>1 Pedro 1:3</b>).
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “A fé cristã não é apenas uma série de doutrinas a serem acreditadas, mas uma esperança que
                    transforma a forma como enfrentamos o sofrimento e até a morte. Só a ressurreição nos dá um futuro
                    tão seguro que muda completamente o nosso presente.” <b>Timothy Keller</b>
                </blockquote>

                <p>
                    Essa esperança nos lembra de que o sofrimento é passageiro e de que o melhor ainda está por vir.
                    Paulo, que enfrentou prisões, perseguições e dores profundas, pôde declarar:
                    “Os sofrimentos do tempo presente não podem ser comparados com a glória a ser revelada em nós”
                    (<b>Romanos 8:18</b>).
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Por que você está assim tão triste, ó minha alma? Espere em Deus! Pois ainda o louvarei;
                    ele é o meu Salvador e o meu Deus” (<b>Salmos 42:11</b>).
                </blockquote>

                <p>
                    A esperança em Cristo é mais do que uma ideia, é uma âncora que nos mantém firmes,
                    lembrando-nos de que o nosso futuro já está garantido em Deus.
                </p>

                {/* --- Seções --- */}
                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    1. Sustentados pela Esperança
                </h2>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Quero trazer à memória o que me pode dar esperança. As misericórdias do Senhor são a causa
                    de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã.
                    Grande é a tua fidelidade.” <b>Lamentações 3:21-23</b>
                </blockquote>

                <p>
                    A beleza da esperança bíblica está no fato de que Deus não nos deixa presos ao ontem.
                    Cada novo dia é um lembrete da graça que nos alcança e da oportunidade de recomeçar.
                    O passado pode carregar dores, erros e pecados, mas em Cristo não somos definidos por eles.
                    O apóstolo Paulo nos lembra: “Assim que, se alguém está em Cristo, é nova criatura;
                    as coisas antigas já passaram; eis que se fizeram novas” (<b>2 Coríntios 5:17</b>).
                </p>

                <p>
                    Não precisamos viver debaixo da culpa ou da condenação, porque Jesus já levou sobre si toda
                    acusação na cruz.
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “A condenação nos prende ao passado, mas a graça de Deus nos impulsiona para o futuro.
                    A cada manhã, Deus não nos apresenta um relatório de falhas, mas uma nova página em branco para
                    escrevermos com Ele.” <b>Joseph Prince</b>
                </blockquote>

                <p>
                    Essa verdade nos liberta: não precisamos carregar o peso do ontem. Podemos levantar todos os dias
                    com a confiança de que as misericórdias do Senhor são novas e suficientes para nos sustentar.
                    Como disse o salmista: “À noite pode vir o choro, mas a alegria vem pela manhã”
                    (<b>Salmos 30:5</b>).
                </p>

                <p>
                    Portanto, quando falhamos, não precisamos nos entregar ao desespero. A vida espiritual nos ajuda a
                    recomeçar, mesmo após quedas, porque a obra da cruz nos garante perdão e restauração.
                </p>

                {/* Seção 2 */}
                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    2. Sustentados pela Vida em Cristo
                </h2>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “O ladrão vem apenas para roubar, matar e destruir; eu vim para que tenham vida e a tenham
                    plenamente.” <b>João 10:10</b>
                </blockquote>

                <p>
                    A vida abundante que Cristo nos oferece não é medida pela ausência de problemas, mas pela presença
                    de Deus em cada detalhe da nossa jornada. O inimigo tenta roubar nossa alegria, matar nossos sonhos
                    e destruir nosso propósito, mas em Cristo encontramos plenitude que transcende circunstâncias.
                </p>

                <p>
                    Abundância não significa ter tudo o que queremos, mas viver no centro da vontade de Deus,
                    onde encontramos significado, propósito e verdadeira satisfação.
                </p>

                <p>
                    Na vida cristã, essa abundância se manifesta em várias dimensões: perdão dos pecados, liberdade da
                    condenação, certeza da salvação, descanso em Deus, reconciliação com os outros e serviço no Reino.
                </p>

                {/* Seção 3 */}
                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    3. Sustentados pela Comunhão
                </h2>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Levai as cargas uns dos outros e, assim, cumprireis a lei de Cristo.” <b>Gálatas 6:2</b>
                </blockquote>

                <p>
                    A vida cristã nunca foi planejada para ser vivida de forma isolada. Desde o início, Deus afirmou:
                    “Não é bom que o homem esteja só” (<b>Gênesis 2:18</b>). Esse princípio aplica-se também à vida em
                    comunidade. O corpo de Cristo é formado por muitos membros, cada um com sua função, mas todos
                    interdependentes (<b>1 Coríntios 12:12-27</b>).
                </p>

                <p>
                    A igreja, portanto, deve ser um lugar de acolhimento, apoio e intercessão. Em um mundo que valoriza
                    a individualidade e o isolamento, a comunhão cristã é um antídoto poderoso contra a solidão e a
                    fragilidade espiritual.
                </p>

                <p>
                    O autor de Hebreus nos adverte: “Não deixemos de reunir-nos como igreja, segundo o costume de
                    alguns, mas procuremos encorajar-nos uns aos outros” (<b>Hebreus 10:25</b>).
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “O Cristo no coração do meu irmão é mais forte do que o Cristo no meu próprio coração.”
                    <b>Dietrich Bonhoeffer</b>
                </blockquote>

                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Você não foi criado para viver isolado. Nós precisamos uns dos outros para crescer, encorajar
                    e cumprir os propósitos de Deus.” <b>Rick Warren</b>
                </blockquote>

                <p>
                    A igreja é uma rede de apoio que nos ajuda a carregar as cargas, celebrar as vitórias e perseverar
                    na fé. Essa comunhão é um reflexo do amor de Cristo que nos une como família espiritual.
                </p>

                {/* Discussão */}
                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    Para Discussão
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>O que significa, na prática, ter a esperança como “âncora da alma”? Você já experimentou essa realidade?</li>
                    <li>Em que aspectos a esperança cristã é diferente de um otimismo humano?</li>
                    <li>Como a ressurreição de Cristo garante uma esperança viva?</li>
                    <li>De que forma podemos renovar nossa esperança a cada manhã?</li>
                    <li>O que a vida abundante em Cristo significa para você hoje?</li>
                    <li>Qual é o papel da comunhão cristã para nos ajudar a permanecer firmes?</li>
                </ul>

                {/* Desafio e Devocional */}
                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    Desafio Semanal
                </h2>
                <p>
                    Durante a semana, ore e envie uma mensagem de encorajamento para alguém do grupo todos os dias.
                    Seja um instrumento de esperança.
                </p>

                <h2 className={`text-${titleSizes[index]} font-semibold mt-6`}>
                    Sugestão Devocional
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Dia 1: Leia{" "}
                        <a
                            className="text-blue-600 font-bold underline hover:text-blue-800 transition inline-flex items-center gap-1"
                            href="https://bible.com/bible/129/jer.29.11.NVI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lamentações 3:21-23
                            <ArrowSquareOutIcon size={16} weight="regular" />
                        </a>{" "}
                        – As misericórdias do Senhor se renovam.
                    </li>
                    <li>
                        Dia 2: Leia{" "}
                        <a
                            className="text-blue-600 font-bold underline hover:text-blue-800 transition inline-flex items-center gap-1"
                            href="https://bible.com/bible/129/jer.29.11.NVI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jeremias 29:11
                            <ArrowSquareOutIcon size={16} weight="regular" />
                        </a>{" "}
                        – Deus tem planos de paz e esperança.
                    </li>
                    <li>
                        Dia 3: Leia{" "}
                        <a
                            className="text-blue-600 font-bold underline hover:text-blue-800 transition inline-flex items-center gap-1"
                            href="https://bible.com/bible/129/jhn.10.10.NVI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            João 10:10
                            <ArrowSquareOutIcon size={16} weight="regular" />
                        </a>{" "}
                        – Vida abundante em Cristo.
                    </li>
                    <li>
                        Dia 4: Leia{" "}
                        <a
                            className="text-blue-600 font-bold underline hover:text-blue-800 transition inline-flex items-center gap-1"
                            href="https://bible.com/bible/129/heb.6.19.NVI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hebreus 6:19
                            <ArrowSquareOutIcon size={16} weight="regular" />
                        </a>{" "}
                        – A esperança é âncora da alma.
                    </li>
                    <li>
                        Dia 5: Leia{" "}
                        <a
                            className="text-blue-600 font-bold underline hover:text-blue-800 transition inline-flex items-center gap-1"
                            href="https://bible.com/bible/129/rom.15.13.NVI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Romanos 15:13
                            <ArrowSquareOutIcon size={16} weight="regular" />
                        </a>{" "}
                        – O Deus da esperança enche de paz e alegria.
                    </li>
                </ul>


                {/* Footer único */}
                <footer className="text-sm text-gray-500 border-t pt-4 mt-8">
                    <p><b>Série de Estudos DNA</b></p>
                    <p>
                        IMPORTANTE: Esse conteúdo é de autoria da CCVideira, podendo ser impresso para compartilhamento
                        da Palavra de Deus, no entanto, é estritamente proibida a sua alteração ou veiculação sem indicação
                        da fonte. Rua Elizeu Oriá, 1553 - José de Alencar, Fortaleza - CE, 60830-035
                    </p>
                    <p>(85) 3878-0100 - www.ccvideira.com.br</p>
                </footer>
            </div>

        </div>
    )
}