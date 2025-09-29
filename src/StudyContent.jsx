import { useState } from "react";
import { TextAaIcon, MinusCircleIcon, PlusCircleIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { SpotfyButton } from "./assets/SpotfyButton";

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

            <div className="flex items-center justify-between py-3">
                <h2 className="text-xl font-semibold">Série de Estudos DNA</h2>
                <img className="w-26" src="ensino_logo.png" alt="Logo do curso Ensino" />
            </div>
            <div className={`text-${sizes[index]} leading-relaxed space-y-4 font-montserrat`}>
                <h1 className="text-3xl font-semibold">Série de Estudos DNA: Assim Diz o Senhor!</h1>
                <h2 className="text-2xl font-medium mt-4">Um Estudo Bíblico Sobre Profecia</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-4">
                    “Mas quem profetiza o faz para edificação, encorajamento e consolação das pessoas. [...] Pois todos vocês podem profetizar, cada um por sua vez, para que todos aprendam e sejam encorajados. O espírito dos profetas está sujeito ao controle dos profetas.” <b>1 Coríntios 14:3, 31-32</b>
                </blockquote>
                <p className="mt-4">
                    Talvez, ao ouvir palavras como “profeta” ou “profecia”, você pense em algo distante, estranho ou até carregado de más experiências. Nosso desejo com esta série é trazer luz bíblica sobre esse tema e mostrar que a profecia não é um assunto marginal ou místico, mas parte essencial da vida da igreja desde os primeiros dias.
                </p>
                <p>
                    A profecia é a manifestação do Espírito Santo através de pessoas comuns, para edificação, exortação e consolação. Quando Deus usa alguém para falar, não se trata de algo produzido pela mente humana, mas de uma palavra que toca o coração de quem ouve de forma clara, transformadora e, muitas vezes, reveladora. É um presente de Deus para fortalecer sua igreja.
                </p>
                <p>
                    No Antigo Testamento, o profeta tinha um ofício específico e era reconhecido publicamente como porta-voz de Deus. Já no Novo Testamento, com a vinda do Espírito Santo sobre todos os crentes, a profecia deixou de ser restrita a alguns poucos e passou a ser uma experiência acessível a todo aquele que permanece em Cristo. É o cumprimento da promessa:
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Nos últimos dias, diz Deus, derramarei do meu Espírito sobre todos os povos; os filhos e as filhas de vocês profetizarão, os jovens terão visões, os velhos terão sonhos. Sobre os meus servos e sobre as minhas servas derramarei do meu Espírito naqueles dias, e eles profetizarão.” <b>Atos 2:17-18; cf. Joel 2:28-29</b>
                </blockquote>
                <p>
                    Esta série de estudos é um convite para que como igreja aprendamos a valorizar, discernir e viver o dom da profecia. Nosso objetivo é ensinar biblicamente, quebrar tabus, cultivar sensibilidade ao Espírito Santo e, sobretudo, caminhar juntos em um ambiente saudável onde a voz de Deus seja ouvida e compartilhada para edificação mútua.
                </p>

                {/* Estudo 1 */}
                <h2 className="text-2xl font-semibold mt-6">Estudo 1 – O Propósito da Profecia no Corpo de Cristo</h2>
                <p>
                    Desde a criação, Deus sempre desejou falar com Seu povo. Ele falou com Adão no Éden (<b>Gn 3:9</b>), chamou Abraão pelo nome (<b>Gn 12:1</b>), revelou sua vontade a Moisés (<b>Êx 3:4</b>), e levantou profetas para transmitir sua mensagem a Israel.
                </p>
                <p>
                    No Novo Testamento, esse desejo se intensifica, pois agora o Espírito Santo habita em cada crente. A profecia é uma das formas pelas quais Deus continua comunicando Seu amor, Sua vontade e direção.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Sigam o caminho do amor e busquem com dedicação os dons espirituais, principalmente o dom de profecia. [...] Quem profetiza é maior do que aquele que fala em línguas, a não ser que as interprete, para que a igreja seja edificada.” <b>1 Coríntios 14:1-5</b>
                </blockquote>
                <p>
                    John Stott afirmou: “Nosso Deus é um Deus que fala. Se Ele não tivesse falado, nós jamais O conheceríamos.” Assim, a profecia revela não apenas que Deus existe, mas que Ele deseja se relacionar conosco.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>1. O Que é a Profecia Bíblica?</h3>
                <p>
                    A palavra profecia vem do grego <i>prophēteia</i>, que significa “falar em favor de” ou “falar diante de”. Biblicamente, profetizar não é apenas prever o futuro, mas principalmente comunicar a mensagem de Deus para edificação do Seu povo.
                </p>
                <p>
                    Existe uma diferença entre profetizar e o ofício de profeta. Em <b>Efésios 4:11</b>, mostra que o “profeta” é um dos ministérios dados à igreja como ofício específico, mas em <b>1 Coríntios 14</b>, Paulo afirma que todos podem profetizar, no sentido de compartilhar palavras inspiradas pelo Espírito Santo para o fortalecimento da igreja.
                </p>
                <p>
                    A profecia tem como propósito: “Mas aquele que profetiza o faz para a edificação, exortação e consolação” (<b>1 Co 14:3</b>). Sendo assim, a profecia edifica quando fortalece a fé e encoraja a perseverança; exorta quando desperta para arrependimento e obediência; e consola quando traz esperança e alívio em tempos de dor.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Profecia no Novo Testamento é relatar em palavras humanas algo que Deus traz à mente de maneira espontânea.” <b>Wayne Grudem</b>
                </blockquote>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>2. Por Que a Profecia é Importante na Igreja?</h3>
                <p>
                    A profecia tem papel fundamental porque mantém a igreja sensível à voz de Deus e centrada em Cristo. A profecia bíblica manifesta as seguintes características:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>A manifestação do Espírito Santo:</b> “A cada um, porém, é dada a manifestação do Espírito, visando ao bem comum.” (<b>1 Coríntios 12:7</b>)</li>
                    <li><b>Edifica, encoraja e consola as pessoas:</b> “Então Ananias foi, entrou na casa, pôs as mãos sobre Saulo e disse: Irmão Saulo, o Senhor Jesus que apareceu no caminho por onde você vinha, enviou-me para que você volte a ver e seja cheio do Espírito Santo.” (<b>Atos 9:17-18</b>)</li>
                    <li><b>Fala para as pessoas na perspectiva do céu:</b> “Mantenham o pensamento nas coisas do alto, e não nas coisas terrenas.” (<b>Colossenses 3:2</b>)</li>
                    <li><b>Revela o amor de Deus:</b> “Oro para que, com as suas gloriosas riquezas, ele os fortaleça no íntimo do seu ser com poder, por meio do seu Espírito...” (<b>Efésios 3:16-19</b>)</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>3. O Espírito Santo Como Fonte da Verdadeira Profecia</h3>
                <p>
                    Nenhum dom espiritual pode ser exercido sem a ação direta do Espírito Santo. A profecia, em especial, não é fruto de talento humano, de boa retórica ou de intuição, mas do fluir de Deus por meio de homens e mulheres que se colocam em dependência do Espírito.
                </p>
                <p>
                    A Bíblia é clara ao mostrar que a verdadeira profecia tem origem divina: “Pois jamais a profecia teve origem na vontade humana, mas homens falaram da parte de Deus, impelidos pelo Espírito Santo” (<b>2 Pe 1:21</b>).
                </p>
                <p>
                    Paulo orienta: “Encham-se do Espírito” (<b>Ef 5:18</b>). Estar cheio do Espírito significa viver sensível à Sua voz, submisso à Sua direção e disposto a ser usado.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Para Discussão</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Quando você lê em <b>1 Coríntios 14:3</b> que a profecia serve para edificação, exortação e consolação, qual desses aspectos você mais já experimentou em sua caminhada com Deus?</li>
                    <li>A Bíblia mostra que todos podem profetizar (<b>1 Co 14:31</b>). Como podemos vencer o medo ou a insegurança de sermos usados por Deus nessa área?</li>
                    <li>Como nossa igreja pode cultivar um ambiente saudável e bíblico para o exercício da profecia, evitando abusos ou distorções?</li>
                    <li>Uma palavra profética traz sempre a perspectiva do céu (<b>Cl 3:2</b>). Em sua opinião, quais os riscos quando uma profecia é dada mais a partir da perspectiva humana do que da direção do Espírito Santo?</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Momento de Oração</h3>
                <p>
                    Para esse momento, acesse nossa playlist no Spotify. Conduzam um momento de oração com o grupo. Orem sobre aquilo que aprenderam neste estudo, criando esse ambiente profético no seu GC.
                </p>
                <SpotfyButton />

                {/* Estudo 2 */}
                <h2 className="text-2xl font-semibold mt-6">Estudo 2 – Relacionamento com Deus e a Vida no Espírito</h2>
                <p>
                    Profetizar não é um dom mecânico, automático ou independente de nossa vida espiritual. É fruto da intimidade com Deus. A voz profética é consequência de um coração que permanece em Cristo e é cheio do Espírito Santo.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>1. Permanecer em Cristo é a Base da Voz Profética</h3>
                <p>
                    Jesus nos lembra: “Permanecei em mim, e eu permanecerei em vós. Como não pode o ramo produzir fruto de si mesmo, se não permanecer na videira, assim nem vós o podeis dar, se não permanecerdes em mim” (<b>Jo 15:4</b>).
                </p>
                <p>
                    A metáfora da videira e dos ramos mostra que a vida de Deus flui em nós como a seiva que sustenta o ramo. Sem Cristo, não há fruto; e sem fruto, não há verdadeira palavra profética.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>2. Encha-se do Espírito Santo Continuamente</h3>
                <p>
                    Paulo nos exorta: “Enchei-vos do Espírito” (<b>Ef 5:18</b>). Isso mostra que não se trata de um evento único, mas de um processo contínuo. Estar cheio do Espírito significa permitir que Ele governe nossa mente, emoções e decisões.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Não se embriaguem com vinho, que leva à libertinagem, mas deixem-se encher pelo Espírito.” <b>Efésios 5:18</b>
                </blockquote>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>O enchimento do Espírito Santo depende de uma vida de oração:</b> “Não apaguem o Espírito.” (<b>1 Tessalonicenses 5:19</b>)</li>
                    <li><b>O enchimento do Espírito Santo é impulsionado pela comunhão:</b> “Chegando o dia de Pentecoste, estavam todos reunidos num só lugar...” (<b>Atos 2:1-4</b>)</li>
                    <li><b>O enchimento do Espírito Santo é uma promessa para aqueles que têm sede:</b> “Pois derramarei água na terra sedenta...” (<b>Isaías 44:3-4</b>)</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>3. Sensibilidade Espiritual e Maturidade Cristã</h3>
                <p>
                    Ouvir a voz de Deus exige discernimento: “Amados, não creiais a todo espírito, mas provai se os espíritos procedem de Deus” (<b>1 Jo 4:1</b>). A obediência também é chave: “Hoje, se ouvirdes a sua voz, não endureçais o vosso coração” (<b>Hb 3:15</b>).
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Para Discussão</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>O que, na prática, significa permanecer em Cristo em sua rotina diária?</li>
                    <li>Qual a diferença entre ter o Espírito Santo habitando em nós (<b>Rm 8:9</b>) e estar cheio d’Ele?</li>
                    <li>O que revela hoje a sua sede por mais de Deus?</li>
                    <li>Como podemos exercitar a obediência imediata à voz de Deus em pequenas decisões do dia a dia?</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Momento de Oração</h3>
                <p>
                    Para esse momento, acesse nossa playlist no Spotify. Conduzam um momento de oração com o grupo. Orem sobre aquilo que aprenderam neste estudo, criando esse ambiente profético no seu GC.
                </p>
                <SpotfyButton />


                {/* Estudo 3 */}
                <h2 className="text-2xl font-semibold mt-6">Estudo 3 – Discernindo Profecias</h2>
                <p>
                    Ao longo dessa série, você tem aprendido sobre a importância do profético, de que Deus fala com você e que Ele quer falar através de você para outras pessoas. A primeira coisa que Deus fez ao criar o homem e a mulher foi falar com eles:
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Deus os abençoou, e lhes disse: ‘Sejam férteis e multipliquem-se! Encham e subjuguem a terra!’” <b>Gênesis 1:28-29</b>
                </blockquote>
                <p>
                    Deus sempre fala. A Bíblia começa com Ele falando quando estava criando e termina com Ele falando com João.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>1. Proximidade</h3>
                <p>
                    “Contudo, aos que o receberam, aos que creram em seu nome, deu-lhes o direito de se tornarem filhos de Deus...” (<b>João 1:12-13</b>). Tornar-se filho te deixa próximo. Priorize estar perto do Pai através da leitura da Palavra, adoração e oração.
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>2. Posicionamento</h3>
                <p>
                    Você precisa estar convicto de que Deus quer e vai falar com você. “E o Senhor disse a Moisés: ‘Vá ao povo e consagre-o hoje e amanhã...’” (<b>Êxodo 19:10-11</b>). Posicione-se para ouvir a voz de Deus através do Seu Momento com Deus (SMD).
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>3. Prontidão</h3>
                <p>
                    Quando você estiver próximo e posicionado, através do Espírito Santo, ficará pronto para ouvir e discernir a voz de Deus. “Quem não tem o Espírito não aceita as coisas que vêm do Espírito de Deus...” (<b>1 Coríntios 2:14-16</b>).
                </p>
                <p>
                    A voz de Deus fala através:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Da Bíblia:</b> “Toda a Escritura é divinamente inspirada...” (<b>2 Timóteo 3:16-17</b>)</li>
                    <li><b>Das situações:</b> “E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus...” (<b>Romanos 8:28</b>)</li>
                    <li><b>De pessoas:</b> “Mas a sabedoria que do alto vem é, primeiramente pura...” (<b>Tiago 3:17</b>)</li>
                    <li><b>De forma sobrenatural:</b> “E Jesus, olhando para eles, disse-lhes: Aos homens é isso impossível, mas a Deus tudo é possível.” (<b>Mateus 19:26</b>)</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>4. Discernindo Profecias</h3>
                <p>
                    “Amados, não creiais a todo espírito, mas provai se os espíritos procedem de Deus” (<b>1 Jo 4:1</b>). Toda profecia deve ser julgada à luz da Bíblia. “Não apaguem o Espírito. Não desprezem as profecias. Mas ponham à prova todas as coisas e fiquem com o que é bom” (<b>1 Ts 5:19-21</b>).
                </p>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Para Discussão</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Como você vê a diferença entre estar perto de Deus, mas não ser próximo dele?</li>
                    <li>O que você tem feito para buscar proximidade com Deus? Como você acha que pode melhorar?</li>
                    <li>De que forma você precisa se posicionar mais para ouvir a voz de Deus?</li>
                    <li>Compartilhe com o grupo alguma situação em que a voz do inimigo ou da sua própria carne tentou te enganar.</li>
                    <li>Compartilhe com o grupo alguma experiência que você teve em ouvir a voz de Deus através da palavra, de pessoas, de situações ou de maneira sobrenatural.</li>
                </ul>

                <h3 className={`text-${titleSizes[index]} font-semibold`}>Momento de Oração</h3>
                <p>
                    Para esse momento, acesse nossa playlist no Spotify. Conduzam um momento de oração com o grupo. Orem sobre aquilo que aprenderam neste estudo, criando esse ambiente profético no seu GC.
                </p>
                <SpotfyButton />

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