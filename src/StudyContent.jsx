import { useState } from "react";
import { TextAaIcon, MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";

export function StudyContent() {
    const [index, setIndex] = useState(0)
    const sizes = ["base", "xl", "2xl"]

    function increaseFontSize() {

        setIndex((prev) => prev < sizes.length - 1 ? prev + 1 : prev = 3)
    }
    function decreaseFontSize() {
        setIndex((prev) => prev > 0 ? prev - 1 : prev = 0)
    }


    return (

        <div className="p-2">
            <div className="flex justify-end">
                <div className="flex gap-2 bg-gray-200 p-2 rounded-2xl">
                    <button>
                        <MinusCircleIcon
                            onClick={decreaseFontSize}
                            size={28}
                            className="text-gray-800"
                        />
                    </button>
                    <TextAaIcon size={28} className="text-gray-800" />
                    <button>
                        <PlusCircleIcon
                            size={28}
                            className="text-gray-800"
                            onClick={() => increaseFontSize()}
                        />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Série de Estudos DNA</h2>
                <img className="w-26" src="ensino_logo.png" alt="Logo do curso Ensino" />
            </div>
            <div className={`text-${sizes[index]} text-gray-950 leading-relaxed space-y-4 font-meonserrat`}>
                <h1 className="text-3xl font-semibold text-gray-900">Estudo 1 – Deus se Importa com a Nossa Alma</h1>

                <p>
                    Muitas vezes pensamos que ter fé significa nunca sentir tristeza, ansiedade ou angústia. Mas a Bíblia mostra que até homens e mulheres de Deus passaram por períodos de dor emocional. Elias pediu a morte (1Rs 19), Davi chorou e questionou (Sl 42), Jeremias lamentou profundamente (Lm 3). Isso nos ensina que a dor não nos afasta de Deus, é justamente nela que Ele mais se aproxima.
                </p>
                <p>
                    A dor é uma realidade inevitável da experiência humana após a queda. Não é apenas uma consequência do pecado que entrou no mundo (Gn 3), mas também um meio pelo qual Deus nos molda, nos chama e nos revela sua graça.
                </p>
                <p>
                    C.S. Lewis descreve a dor como “o megafone de Deus para despertar um mundo surdo” (<i>O Problema do Sofrimento</i>). Quando tudo vai bem, tendemos a viver de forma independente, mas no sofrimento somos lembrados de nossa fragilidade e necessidade de Deus.
                </p>
                <p>
                    É importante olharmos sob a perspectiva de Cristo, pois Jesus não apenas nos dá forças na dor, mas entrou nela conosco. Na cruz, Jesus experimentou abandono, angústia e sofrimento para que nunca estivéssemos sozinhos em nossas lutas. Ele se identifica com nossas lágrimas (Hb 4:15) e nos dá descanso verdadeiro: “Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei” (Mt 11:28).
                </p>
                <p>
                    Embora não devamos romantizar o sofrimento, a Bíblia mostra que Deus pode usar a dor para nos refinar. Paulo fala do “espinho na carne” (2Co 12:7-10) como algo que o manteve dependente da graça de Cristo. A dor não é fim em si mesma, mas pode ser meio de amadurecimento espiritual.
                </p>
                <p>
                    Enquanto a filosofia e a psicologia tentam dar significado à dor pela lógica humana, o cristianismo aponta para a esperança eterna. Em Cristo, a dor nunca é a palavra final, pois o sofrimento pode ser temporário, mas as glórias que nos esperam são eternas. Deus não envia dor como castigo para seus filhos, mas nos encontra em meio a ela com sua graça abundante. O sofrimento pode revelar nossas limitações, mas também manifesta a suficiência do amor de Deus.
                </p>
                <p>
                    A fé não nos convida a negar ou minimizar o sofrimento, mas a enxergá-lo sob a luz da presença e da promessa de Deus, ela não elimina a dor, mas nos dá um fundamento para atravessá-la. A boa notícia do evangelho é que em Jesus temos descanso, consolo e esperança, mesmo quando a alma se encontra abatida.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Deus Reconhece a Nossa Dor</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Por que você está abatida, ó minha alma? Por que se perturba dentro de mim? Ponha a sua esperança em Deus! Pois ainda o louvarei; ele é o meu Salvador e o meu Deus.” <b>Salmo 42:5</b>
                </blockquote>
                <p>
                    Davi não esconde sua dor, mas fala com a própria alma, reconhecendo seu abatimento. O salmo mostra que a fé não elimina a angústia, mas nos ensina a transformar a dor em oração. A dor nos chama a voltar nossa atenção para Deus.
                </p>
                <p>
                    Um cristão que enfrenta ansiedade pode ser tentado a negar seus sentimentos para parecer “forte na fé”. Mas o primeiro passo para a cura é reconhecer diante de Deus: “Senhor, estou abatido, mas escolho confiar em Ti”. Assim como Davi, falar com a alma é reafirmar a esperança.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Jesus Acolhe os Cansados</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas. Pois o meu jugo é suave e o meu fardo é leve.” <b>Mateus 11:28-30</b>
                </blockquote>
                <p>
                    Carregar fardos faz parte da experiência humana. Todos nós enfrentamos momentos de ansiedade, culpa, medo, solidão e cansaço. A boa notícia é que Jesus não nos chama para esconder esses pesos, mas para trazê-los até Ele. Esse convite mostra que Ele não é indiferente à nossa dor, mas deseja nos aliviar.
                </p>
                <p>
                    Um dos fardos mais comuns é a ansiedade em relação ao futuro. Nos preocupamos com o amanhã, mas a Palavra nos lembra: “Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês” (1Pe 5:7). Quando entregamos nossos medos ao Senhor, recebemos a paz que excede todo entendimento (Fp 4:6-7). Outro peso que aprisiona muitos é a culpa do passado. No entanto, em Cristo não há condenação (Rm 8:1). Ele nos perdoa e nos restaura, lembrando que nossa identidade não está em nossos erros, mas em sermos filhos amados de Deus.
                </p>
                <p>
                    Também enfrentamos a solidão, especialmente quando nos sentimos abandonados. Mas Jesus nos assegura: “E eu estarei sempre com vocês, até o fim dos tempos” (Mt 28:20). Sua presença constante nos conforta, e Ele nos insere na comunidade de fé para não caminharmos sozinhos. Até mesmo o medo e a insegurança podem nos sufocar, mas Jesus disse: “Não tenha medo, apenas creia” (Mc 5:36). Ele nos sustenta nas incertezas da vida, seja em um diagnóstico difícil, seja em uma situação financeira complicada.
                </p>
                <p>
                    Na prática, como podemos entregar esses fardos a Jesus? O primeiro passo é a oração sincera, sem máscaras. Deus se agrada de quando abrimos o coração e dizemos: “Senhor, eu não consigo lidar com isso, entrego em Tuas mãos”. Além disso, a entrega precisa ser diária, renovada a cada manhã, confiando que Ele carregará conosco os pesos do dia. A leitura da Palavra também é fundamental, pois ela renova nossa mente e nos ajuda a enxergar a vida sob a perspectiva de Deus; por exemplo, Mateus 6:25-34 é um bálsamo para os dias de preocupação com a provisão.
                </p>
                <p>
                    Outra forma prática de lançar nossos fardos sobre Ele é através da adoração. Louvar mesmo em meio às lutas é reconhecer que Deus é maior do que qualquer problema. A vida comunitária também faz parte desse processo, já que a Bíblia nos exorta a levarmos as cargas uns dos outros (Gl 6:2). Não fomos chamados para viver sozinhos, mas para compartilhar dores e vitórias. Por fim, entregar nossos fardos envolve obedecer a Cristo. Muitas vezes, isso significa liberar perdão, mudar atitudes ou confiar em passos de fé que Ele nos pede.
                </p>
                <p>
                    Assim, entendemos que Jesus não apenas retira nossos pesos, mas os substitui por Seu jugo suave e leve (Mt 11:30). Ele não promete ausência de problemas, mas descanso real para a alma. A cada vez que oramos, confiamos, obedecemos, adoramos e vivemos em comunidade, estamos efetivamente entregando a Ele aquilo que não conseguimos carregar sozinhos.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Peça Ajuda!</h2>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    “Acaso não sabem que o corpo de vocês é santuário do Espírito Santo que habita em vocês, que lhes foi dado por Deus, e que vocês não são de si mesmos?” <b>1 Coríntios 6:19</b>
                </blockquote>
                <p>
                    Deus nos criou de forma integral: corpo, alma e espírito (1Ts 5:23). Por isso, cuidar da mente e do corpo também é parte da vida espiritual. Buscar auxílio médico ou terapêutico não é falta de fé, mas sabedoria. Assim como vamos ao médico quando temos uma fratura, também podemos buscar apoio profissional quando nossa saúde mental está abalada.
                </p>
                <p>
                    C.S. Lewis lembrava que o cristianismo não é contra a razão, mas a ilumina. Da mesma forma, a fé não se opõe à ciência, mas pode caminhar junto com ela para nosso bem. Se você estiver precisando dar mais atenção para a sua saúde mental, pode combinar tratamento médico com disciplinas espirituais como oração, leitura da Palavra e vida em comunidade. Enquanto o remédio e a terapia tratam aspectos biológicos e emocionais, a fé fortalece o coração com esperança e propósito. Não negligencie a sua saúde, isso é sua responsabilidade!
                </p>
                <p>
                    Esteja atento também às pessoas que estão à sua volta, como seu cônjuge, filhos, pais, familiares ou amigos, pois pessoas que enfrentam quadros depressivos, muitas vezes, não conseguem pedir ajuda. Portanto, busque olhar com empatia para momentos de vulnerabilidade de pessoas próximas.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Para Discussão</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Por que a fé não nos impede de sentir tristeza, ansiedade ou angústia, e como você lida com suas dores emocionais?</li>
                    <li>De que forma reconhecer e falar sobre sua dor, como Davi fez no Salmo 42, pode ajudá-lo a buscar socorro em Deus?</li>
                    <li>Quais fardos você precisa entregar a Jesus hoje e como Ele pode aliviar sua ansiedade, culpa ou medo?</li>
                    <li>Que práticas (oração, adoração, leitura da Palavra, comunidade) ajudam você a entregar seus fardos e encontrar descanso em Cristo?</li>
                    <li>Como cuidar da saúde mental e física reflete seu cuidado com o corpo e a alma como templo do Espírito Santo (1Co 6:19)?</li>
                    <li>Que ações concretas você pode tomar nesta semana para apoiar a si mesmo ou alguém próximo que esteja enfrentando sofrimento emocional?</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Desafio Semanal</h2>
                <p>
                    Durante a semana, escolha um momento por dia para entregar suas ansiedades a Deus em oração. Se possível, anote em um caderno suas preocupações e depois ore entregando-as ao Senhor.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Sugestão Devocional</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Dia 1:</b> Leia Salmo 34:18 – Deus está perto do coração quebrantado.</li>
                    <li><b>Dia 2:</b> Leia Isaías 41:10 – Não temas, Ele te fortalece.</li>
                    <li><b>Dia 3:</b> Leia 1 Pedro 5:7 – Lance sobre Ele a sua ansiedade.</li>
                    <li><b>Dia 4:</b> Leia Salmo 23:1-3 – Ele restaura a alma.</li>
                    <li><b>Dia 5:</b> Leia Mateus 11:28-30 – Jesus traz descanso.</li>
                </ul>

                <footer className="mt-8 text-sm text-gray-600">
                    <p><b>IMPORTANTE:</b> Esse conteúdo é de autoria da CCVideira, podendo ser impresso para compartilhamento da Palavra de Deus, no entanto, é estritamente proibida a sua alteração ou veiculação sem indicação da fonte.</p>
                    <p>Rua Elizeu Oriá, 1553 - José de Alencar, Fortaleza - CE, 60830-035</p>
                    <p>(85) 3878-0100 - <a href="http://www.ccvideira.com.br" className="text-blue-600 hover:underline">www.ccvideira.com.br</a></p>
                </footer>
            </div>
        </div>
    )
}