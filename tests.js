var tests = [
    {

        id: 0,
        
        name:           "Philosophy",
        description:    "Find out how you stand along many philosophical dichotomies from egoism and altruism to skepticism and absolutism.",
        preamble:       "You will be asked a number of questions. These will be in the form of either a statement or a scenario. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-a51344",
        
        testType:       AGREE,
        resultsType:    BARS,
        
        scales: [
            {
                a: {
                    text: "Materialism",
                    path: "https://i.ibb.co/XjtG3g8/materialism.png",
                    color: "#c4eeb2",
                    desc: "All of reality is physical and material."
                },
                b: {
                    text: "Spiritualism",
                    path: "https://i.ibb.co/DYZkgPV/spiritualism.png",
                    color: "#f7b9c4",
                    desc: "Some of reality transcends the physical and material."
                },
                param: "m",
                axisName: "Metaphysical Axis",
                axisDesc: "How you view reality."
            },
            {
                a: {
                    text: "Egoism",
                    path: "https://i.ibb.co/VqNpmVk/egoism.png",
                    color: "#b6a8d8",
                    desc: "The individual is most important."
                },
                b: {
                    text: "Altruism",
                    path: "https://i.ibb.co/6t9tygg/altruism.png",
                    color: "#fff5bf",
                    desc: "The community is most important."
                },
                param: "e",
                axisName: "Societal Axis",
                axisDesc: "Your attitude toward society."
            },
            {
                a: {
                    text: "Idealism",
                    path: "https://i.ibb.co/rmTfrvq/idealism.png",
                    color: "#ffe081",
                    desc: "The underlying principles are most important."
                },
                b: {
                    text: "Pragmatism",
                    path: "https://i.ibb.co/3TSTpG5/pragmatism.png",
                    color: "#7474c7",
                    desc: "The results are most important."
                },
                param: "i",
                axisName: "Decision-making Axis",
                axisDesc: "How you approach decision-making and your actions."
            },
            {
                a: {
                    text: "Hedonism",
                    path: "https://i.ibb.co/YW8nMkB/hedonism.png",
                    color: "#f99ba4",
                    desc: "Pleasure is intrinsically good and should be desired."
                },
                b: {
                    text: "Asceticism",
                    path: "https://i.ibb.co/TmTS99G/asceticism.png",
                    color: "#9be18c",
                    desc: "Abstinence from pleasure in order to discover meaning is most important."
                },
                param: "h",
                axisName: "Sensuality Axis",
                axisDesc: "How you approach your indulgences."
            },
            {
                a: {
                    text: "Nihilism",
                    path: "https://i.ibb.co/PFH7jw9/nihilism.png",
                    color: "#86989c",
                    desc: "Neither meaning nor morality are objective."
                },
                b: {
                    text: "Moralism",
                    path: "https://i.ibb.co/YDWs0Mt/moralism.png",
                    color: "#fcead7",
                    desc: "Morality and meaning are objective - to some extent."
                },
                param: "n",
                axisName: "Meaning Axis",
                axisDesc: "Whether you believe in objective meaning."
            },
            {
                a: {
                    text: "Rationalism",
                    path: "https://i.ibb.co/txNkzJg/rationalism.png",
                    color: "#ffd1b3",
                    desc: "Intellect and logic."
                },
                b: {
                    text: "Romanticism",
                    path: "https://i.ibb.co/KDKZGyQ/romanticism.png",
                    color: "#8ac5bb",
                    desc: "Passions and the heart."
                },
                param: "r",
                axisName: "Values Axis",
                axisDesc: "What you value most."
            },
            {
                a: {
                    text: "Skepticism",
                    path: "https://i.ibb.co/26FttkZ/skepticism.png",
                    color: "#a2bcd4",
                    desc: "We can never truly know anything for sure."
                },
                b: {
                    text: "Absolutism",
                    path: "https://i.ibb.co/QFVfmyr/absolutism.png",
                    color: "#ffe4bf",
                    desc: "There are objective truths that can also be understood."
                },
                param: "s",
                axisName: "Epistemology Axis",
                axisDesc: "Your attitude towards knowledge."
            }
        ],

        instruction:    "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "I would rather find true love than be wealthy.",
                effects: [-10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "I would rather be given an expensive car than save the life of a starving child.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "I would rather receive money than gifts.",
                effects: [0, 0, -10, 0, 0, 5, 0]
            },
            {
                text: "I would rather be in a sexual relationship without intimacy than be in an intimate relationship without sex.",
                effects: [5, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "There is no inherent meaning to life.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "A world without colour is far darker than a world without order.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "Society will always need a strong authority.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "I believe in some form of spiritual afterlife.",
                effects: [-10, 0, 0, 0, -5, 0, 0]
            },
            {
                text: "If I had to choose: I would save myself instead of a loved one.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "The ends usually justify the means.",
                effects: [0, 5, -10, 0, 0, 0, 0]
            },
            {
                text: "I would rather live a life of personal pleasure than settle down and have children.",
                effects: [5, 5, 0, 10, 0, 0, 0]
            },
            {
                text: "Life is suffering and fundamentally meaningless.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "When making a decision the underlying reasoning is always more important than the consequences.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "Extraordinary claims require extraordinary evidence.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "There is more to the world than mere material.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Most people are inherently selfish.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "We should strive towards a utopian society.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Sometimes we must suffer in the present so that we can have a better future.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "No actions are inherently moral or immoral.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Reason is more important than emotion.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "It is foolish to believe a claim if there is no evidence to back it up.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "My mental wellbeing is more important to me than material possessions.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "Selflessness is a virtue.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Our society is fundamentally flawed and in need of radical reform.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "I prefer friendships that help me grow as a person as opposed to ones that are exciting.",
                effects: [0, 0, 0, -10, 0, 0, 0]
            },
            {
                text: "There is an underlying morality in everything that we do.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "Without music, life would be a mistake.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "There exists an omniscient, omnipotent and absolute being.",
                effects: [-5, 0, 0, 0, -5, 0, -10]
            },
            {
                text: "Consciousness is immaterial.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "My own prosperity matters more to me than the happiness of those around me.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "People who desire constant success must change their conduct with the times.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "It is virtuous to live a simple life without an abundance of physical comforts.",
                effects: [-5, 0, 0, -10, -5, 0, 0]
            },
            {
                text: "We are all insignificant in the eyes of the universe.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "A society without marriage would be better than a society without divorce.",
                effects: [0, 0, 5, 5, 5, -10, 0]
            },
            {
                text: "Our society defines us.",
                effects: [0, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Spirit and matter are two separate entities.",
                effects: [-10, 0, 0, 0, 0, 0, 0]
            },
            {
                text: "I will usually put my family, my community or my people above my own personal goals.",
                effects: [0, -10, 0, -5, 0, 0, 0]
            },
            {
                text: "Revolution is sometimes a benefit to society.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "People have the right to try to achieve as much pleasure as possible.",
                effects: [0, 5, 0, 10, 0, 0, 0]
            },
            {
                text: "Life is despair.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "Educating the mind without educating the heart is no education at all.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "Human beings possess free will.",
                effects: [0, 0, 0, 0, -5, -5, -10]
            },
            {
                text: "It is good to strive towards fame, wealth and power.",
                effects: [10, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "I would rather live alone in luxury than in poverty with friends and family.",
                effects: [5, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Societal progression should be carried out slowly and in small, incremental steps.",
                effects: [0, 0, -10, 0, 0, 0, 0]
            },
            {
                text: "Pleasure is the highest good.",
                effects: [0, 0, 0, 10, 0, 0, 0]
            },
            {
                text: "I don't care about morality.",
                effects: [0, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "It is foolish to let emotions influence your decisions. ",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Nothing can be proven to be true.",
                effects: [0, 0, -5, 0, 0, 0, 10]
            },
            {
                text: "A life of fame and fortune is more desirable to me than a happy and meaningful life.",
                effects: [10, 5, 0, 5, 0, 0, 0]
            },
            {
                text: "Be kind, for everyone you meet is fighting a hard battle.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "The world of ideas is superior to the physical world.",
                effects: [0, 0, 10, 0, 0, -5, 0]
            },
            {
                text: "It is better to live a frugal life.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "Moral statements are statements of truth or fact more than they are statements of emotion or desire.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "Scientific research is more important than art and music.",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "I would rather live in a wealthy society with little to no morals than live in a poor society with morals and identity.",
                effects: [10, 5, 0, 5, 10, 0, 0]
            },
            {
                text: "We should focus on the wellbeing of our community.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            },
            {
                text: "Our ideas stem from reality.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Our primary pursuit should be our own passions and pleasures.",
                effects: [0, 5, 0, 10, 5, -10, 0]
            },
            {
                text: "There is a distinction between 'good' and 'bad' that goes beyond mere human nature.",
                effects: [0, 0, 0, 0, -10, 0, 0]
            },
            {
                text: "The primary goal of humanity is the pursuit of knowledge",
                effects: [0, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Human beings possess a soul.",
                effects: [-10, 0, 0, 0, 0, 0, -10]
            },
            {
                text: "Individuals should always act in their own self-interest.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Each person has a function in society.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "There is a way to live that is morally ideal.",
                effects: [0, 0, 0, -5, -10, 0, 0]
            },
            {
                text: "It is not wise to be affected by strong passions and fears.",
                effects: [0, 0, -5, -5, 0, 10, 0]
            },
            {
                text: "The universe obeys natural and fundamental laws.",
                effects: [10, 0, 5, 0, 0, 0, -10]
            },
            {
                text: "People cannot be truly altruistic.",
                effects: [0, 10, 0, 0, 0, 0, 0]
            },
            {
                text: "Lofty ideals such as justice and liberty are of great importance to me.",
                effects: [0, 0, 10, 0, 0, 0, 0]
            },
            {
                text: "Authority must always be ridiculed.",
                effects: [0, 0, 10, 0, 0, 0, 10]
            },
            {
                text: "Without faith in a God we cannot be content.",
                effects: [-5, 0, 0, 0, -10, 0, -10]
            },
            {
                text: "Emotion cannot be discounted when making decisions.",
                effects: [0, 0, 0, 0, 0, -10, 0]
            },
            {
                text: "We can never perceive true reality.",
                effects: [-10, 0, -5, 0, 0, 0, 10]
            },
            {
                text: "We should help those who are struggling in our society.",
                effects: [0, -10, 0, 0, 0, 0, 0]
            }
        ],

        markers: [
            {
                name: "Platonism",
                path: "https://i.ibb.co/nbyn1gf/platonism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Aristotelianism",
                path: "https://i.ibb.co/tmFbrjB/aristotelianism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Stoicism",
                path: "https://i.ibb.co/5WzmpWb/stoicism.png",
                scales: [
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Epicureanism",
                path: "https://i.ibb.co/hRt7gWW/epicureanism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 3,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Objectivism",
                path: "https://i.ibb.co/q9jRYcn/objectivism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Humanism",
                path: "https://i.ibb.co/QK7s8Sw/humanism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Hobbesian",
                path: "https://i.ibb.co/k90bqZY/hobbesian.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Monotheism",
                path: "https://i.ibb.co/qYwgtsX/monotheism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.6
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Nietzschean",
                path: "https://i.ibb.co/r4j9vqf/nietzschean.png",
                scales: [
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Rousseauian",
                path: "https://i.ibb.co/7Kyn5vm/rousseauian.png",
                scales: [
                    {
                        scale: 1,
                        bar: 0,
                        min: 0.6
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            }
        ]

    },
    {

        id: 1,
        
        name:           "Economics",
        description:    "How do you think the economy should be run? Find out now and see your results displayed along multiple economic axes.",
        preamble:       "You will be asked a number of questions. These will be in the form of either a statement or a scenario. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results:        "Your results are displayed below:",
        
        btnClass:       "btn-5158bb",
        
        testType:       AGREE,
        resultsType:    BARS,

        scales: [
            {
                a: {
                    text: "Protectionism",
                    path: "https://i.ibb.co/2ngKX6G/protectionism.png",
                    color: "#f67681",
                    desc: "Restricted trade."
                },
                b: {
                    text: "Free Trade",
                    path: "https://i.ibb.co/BGc4Mbd/freetrade.png",
                    color: "#7bed9f",
                    desc: "Unregulated trade."
                },
                param: "f",
                axisName: "Trade Axis",
                axisDesc: "How trade should be regulated."
            },
            {
                a: {
                    text: "Inter-Dependence",
                    path: "https://i.ibb.co/6m4TM8j/interdependence.png",
                    color: "#fecdaa",
                    desc: "Global reliance."
                },
                b: {
                    text: "Autarky",
                    path: "https://i.ibb.co/p3RX7Mk/autarky.png",
                    color: "#82ccdd",
                    desc: "Self-sufficiency."
                },
                param: "a",
                axisName: "Resources Axis",
                axisDesc: "Where resources should be derived from."
            },
            {
                a: {
                    text: "Libertarianism",
                    path: "https://i.ibb.co/GWxySVV/libertarianism.png",
                    color: "#D6A2E8",
                    desc: "Less power."
                },
                b: {
                    text: "Statism",
                    path: "https://i.ibb.co/xm5LhrB/statism.png",
                    color: "#ffeaa7",
                    desc: "More power."
                },
                param: "s",
                axisName: "State Axis",
                axisDesc: "How much power the state should have."
            },
            {
                a: {
                    text: "Globalisation",
                    path: "https://i.ibb.co/k1J9xwy/globalisation.png",
                    color: "#fafac6",
                    desc: "Leave it up to the global market."
                },
                b: {
                    text: "Nationalisation",
                    path: "https://i.ibb.co/HpWskNV/nationalisation.png",
                    color: "#b7c3f3",
                    desc: "The government should institute national programmes."
                },
                param: "n",
                axisName: "Social Systems Axis",
                axisDesc: "How social systems should be setup."
            },
            {
                a: {
                    text: "Commercial",
                    path: "https://i.ibb.co/1vy4srt/commercial.png",
                    color: "#f49390",
                    desc: "Money and banking."
                },
                b: {
                    text: "Subsistence",
                    path: "https://i.ibb.co/fMgrp58/subsistence.png",
                    color: "#49beaa",
                    desc: "Agriculture and tradition."
                },
                param: "c",
                axisName: "Industry Axis",
                axisDesc: "Which industries should the economy specialise in."
            },
            {
                a: {
                    text: "Adhocracy",
                    path: "https://i.ibb.co/fYnKhQR/adhocracy.png",
                    color: "#f3c98b",
                    desc: "Completely organic market that changes sporadically."
                },
                b: {
                    text: "Bureaucracy",
                    path: "https://i.ibb.co/0nn8b5P/bureaucracy.png",
                    color: "#b8bedd",
                    desc: "Centralised administrative body that plans certain sectors."
                },
                param: "b",
                axisName: "Market Structure Axis",
                axisDesc: "How the market is arranged."
            },
            {
                a: {
                    text: "Flat Tax",
                    path: "https://i.ibb.co/86zJpyD/flattax.png",
                    color: "#c5c3c6",
                    desc: "Universal tax on all citizens, usually low."
                },
                b: {
                    text: "Progressive Tax",
                    path: "https://i.ibb.co/jHCCWh5/progressivetax.png",
                    color: "#ef767a",
                    desc: "Higher taxes, specifically on higher income citizens."
                },
                param: "p",
                axisName: "Taxation Axis",
                axisDesc: "How people should be taxed."
            }
        ],

        instruction:    "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "The freer the market, the freer the people.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "Self-sufficiency is vital for any economy.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "The government continuing to intervene in the economy will eventually lead to tyranny.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Providing national basic income is a realistic and desirable goal.",
                effects: [0, 0, 0, -10, 5, 0, 0]
            },
            {
                text: "There should be little to no industrialisation in the economy.",
                effects: [0, 0, 5, 0, -10, 0, 0]
            },
            {
                text: "The state should initiate price controls on various goods.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "A progressive income tax is good for the economy.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Strong tariffs are necessary in a sovereign state.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "A country should be self-sufficient when it comes to providing basic needs such as food and water",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "Economic intervention is needed in order to ensure income equality.",
                effects: [0, 0, -10, 0, 0, -5, 0]
            },
            {
                text: "National work programmes which ensure employment are practical and feasible.",
                effects: [0, 0, 0, -10, -5, 0, 0]
            },
            {
                text: "The economy should be based around agriculture and natural resources.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "Long term, multiyear plans are important initiatives for the state economy.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Luxury goods should be highly taxed.",
                effects: [0, 0, -5, 0, 0, 0, -10]
            },
            {
                text: "Goods produced within the country should recieve subsidies to help them out-compete foreign goods.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "There should exist self-sufficient local cooperatives within the economy.",
                effects: [0, -10, 0, 0, 0, -5, 0]
            },
            {
                text: "The state should have the ability to harshly punish negative forces in the economy.",
                effects: [0, 0, -10, 0, 0, 0, -5]
            },
            {
                text: "Nationalised education and healthcare systems are of great importance in a strong society.",
                effects: [0, 0, 0, -10, 0, -5, 0]
            },
            {
                text: "Our economic order should be directly linked to ecology.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "It is best if the state's economic policies are flexible and can be changed to suit the current situation.",
                effects: [-5, 0, 0, 0, 0, 10, 0]
            },
            {
                text: "Corporate taxes should be increased.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "The issuing of national patents is good for the economy.",
                effects: [10, 0, 0, -5, 0, 0, 0]
            },
            {
                text: "It is damaging to the economy to be reliant on foreign countries.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "The state has no right to interfere in the private affairs of individuals.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Railways and other transport systems should be nationalised.",
                effects: [0, 0, -5, -10, 0, 0, 0]
            },
            {
                text: "Nations are better off having an organic economy that is tied to nature.",
                effects: [0, -5, 0, 0, -10, 0, 0]
            },
            {
                text: "State intervention in the economy almost always results in catastrophe.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "Tax cuts are necessary in order to maintain a prosperous economy.",
                effects: [0, 0, 0, 0, 0, 5, 10]
            },
            {
                text: "Trade restrictions and import taxes are good.",
                effects: [10, 0, 0, -5, 0, 0, 0]
            },
            {
                text: "Small-scale, free initiatives should be promoted within the country.",
                effects: [0, -10, 0, 0, -5, 0, 0]
            },
            {
                text: "A planned economy is best.",
                effects: [0, 0, -10, 0, 0, -5, 0]
            },
            {
                text: "It is better to have a nationalised banking system.",
                effects: [0, 0, 0, -10, 0, -5, 0]
            },
            {
                text: "An economy should be founded on competition and consumption.",
                effects: [0, 0, 0, 0, 10, 5, 0]
            },
            {
                text: "The bigger the government the better.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Aside from funding necessary public programmes (the police force, etc) taxation should be as limited as possible.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "Trade distorting policies don't work.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "It is better if the state receives significant support from foreign countries and corporations.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "It is better if private businesses are left to their own devices.",
                effects: [0, 0, 10, 0, 0, 0, 5]
            },
            {
                text: "Multinational corporations are more efficient than publically-funded systems.",
                effects: [0, 0, 5, 10, 0, 0, 0]
            },
            {
                text: "Economies need to industrialise and modernise in order to flourish.",
                effects: [-5, 0, 0, 0, 10, 0, 0]
            },
            {
                text: "A functioning economy will always need to have a complex set of rules and guidelines kept in place.",
                effects: [0, 0, 0, 0, 0, -10, -5]
            },
            {
                text: "Higher income households should be expected to pay a higher income tax.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Unregulated access to foreign markets is a good thing.",
                effects: [-10, 0, 5, 0, 0, 0, 0]
            },
            {
                text: "Economic powers such as the EU should provide support to struggling countries.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Every intervention in the economy is a potential threat to individual liberty.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "Foreign businesses should be encouraged to reside wherever they like.",
                effects: [0, 0, 0, 10, 0, 5, 0]
            },
            {
                text: "An economy that utilises foraging techniques, such as hunting and gathering, is preferable.",
                effects: [0, 0, -5, 0, -10, 0, 0]
            },
            {
                text: "The economy should be organised organically, devoid of planning and rules.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            },
            {
                text: "We should increase taxes so that we can fund better social systems.",
                effects: [0, 0, 0, 0, 0, -5, -10]
            },
            {
                text: "Trade should be heavily regulated.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "Ideally, states should depend on and support each other.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "Statist dreams of utopia are one of the biggest threats to economic prosperity.",
                effects: [0, 0, 10, 0, 0, 5, 0]
            },
            {
                text: "We're better off with a modern, globalised economy.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "Monetary value or currency is at the core of any functioning economy.",
                effects: [0, 0, 0, 0, 10, 5, 0]
            },
            {
                text: "An economic structure should be fluid, lacking in formalisation, paperwork and rules.",
                effects: [0, 0, 0, 0, -5, 10, 0]
            },
            {
                text: "All citizens should pay taxes at the same rate.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "Overall, protectionism has had a net negative effect on economies.",
                effects: [-10, 0, 0, 5, 0, 0, 0]
            },
            {
                text: "Economies should support each other and promote inter-dependence.",
                effects: [0, 10, 0, 5, 0, 0, 0]
            },
            {
                text: "The economy should obey the state; never the other way around.",
                effects: [0, 0, -10, 0, -5, 0, 0]
            },
            {
                text: "Globalisation is inevitable and for the better.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "We should promote commercial lifestyles of profit and usury.",
                effects: [0, 0, 5, 0, 10, 0, 0]
            },
            {
                text: "Strong public administration is needed in order to uphold the law, maximise efficiency and prevent favoritism.",
                effects: [0, 0, 0, 0, 0, -10, -5]
            },
            {
                text: "Taxpayers shouldn't be expected to fund expensive social systems.",
                effects: [0, 0, 5, 0, 0, 0, 10]
            },
            {
                text: "The government should have major control over the economic ins and outs of the country.",
                effects: [10, -5, 0, 0, 0, 0, 0]
            },
            {
                text: "For an economy to function the state needs to have significant control over it.",
                effects: [0, 0, -10, 0, 0, 0, -5]
            },
            {
                text: "We should strive towards a universal, global economy.",
                effects: [0, 0, 0, 10, 5, 0, 0]
            },
            {
                text: "Bureacracy is needed so that law, order and a functioning economy can be maintained.",
                effects: [0, 0, -5, 0, 0, -10, 0]
            },
            {
                text: "Specialised teams should run different aspects of the economy as opposed to a single bureaucratic body.",
                effects: [0, 0, 5, 0, 0, 10, 0]
            }
        ],

        markers: [
            {
                name: "Keynesian",
                path: "https://i.ibb.co/rt9TzqQ/keynesian.png",
                scales: [
                    {
                        scale: 6,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 5,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Austrian School",
                path: "https://i.ibb.co/7p9CLBx/austrianschool.png",
                scales: [
                    {
                        scale: 0,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Marxism",
                path: "https://i.ibb.co/wgNNFsm/marxism.png",
                scales: [
                    {
                        scale: 2,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Mercantilism",
                path: "https://i.ibb.co/XLx6nvV/mercantilism.png",
                scales: [
                    {
                        scale: 0,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Chicago School",
                path: "https://i.ibb.co/9ZTRKLx/chicagoschool.png",
                scales: [
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.7
                    },
                    {
                        scale: 4,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Distributism",
                path: "https://i.ibb.co/XxPKsvB/distributism.png",
                scales: [
                    {
                        scale: 4,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 2,
                        bar: 0,
                        min: 0.6
                    }
                ]
            },
            {
                name: "Fascism",
                path: "https://i.ibb.co/px4x1HQ/fascism.png",
                scales: [
                    {
                        scale: 1,
                        bar: 1,
                        min: 0.7
                    },
                    {
                        scale: 3,
                        bar: 1,
                        min: 0.6
                    }
                ]
            }
        ]

    },
    {

        id: 2,

        name: "Personality Compass",
        description: "Find out where you land on our personality compass. This test will measure four key personality traits along two dichotomic axes.",
        preamble: "You will be asked a number of questions. These will be in the form of a statement. For each of these questions you should state whether you agree or disagree (broadly speaking). Please try to answer as honestly as possible.",
        results: "Your results are displayed below:",

        btnClass: "btn-e2711d",

        testType: AGREE,
        resultsType: COMPASS,

        scales: [
            {
                a: {
                    text: "Reasonable",
                    path: "",
                    color: "#d9d2ed",
                    //color: "#f7a9a8",
                    desc: "Stable and conventional."
                },
                b: {
                    text: "Sentimental",
                    path: "",
                    color: "#fff2cf",
                    //color: "#d8d4f2",
                    desc: "Emotional and creative."
                },
                param: "h",
                axisName: "Emotional Axis",
                axisDesc: "How open you are to passion and how you are influenced by it."
            },
            {
                a: {
                    text: "Assertive",
                    path: "",
                    color: "#cfe2f8",
                    //color: "#b8e1ff",
                    desc: "Disagreeable and conscientious."
                },
                b: {
                    text: "Deferential",
                    path: "",
                    color: "#d9ead8",
                    //color: "#beef9e",
                    desc: "Agreeable and indifferent."
                },
                param: "v",
                axisName: "Exacting Axis",
                axisDesc: "How competitive and diligent you are."
            }
        ],

        instruction: "How much do you agree/disagree with the following statement?",
        questions: [
            {
                text: "I'm quite an imaginative person.",
                effects: [10, 0]
            },
            {
                text: "I get stressed quite easily.",
                effects: [10, 0]
            },
            {
                text: "I get irritated easily.",
                effects: [0, 10]
            },
            {
                text: "I keep my home/office very clean.",
                effects: [0, 10]
            },
            {
                text: "I'm not very artistic or creative.",
                effects: [-10, 0]
            },
            {
                text: "I am usually relaxed.",
                effects: [-10, 0]
            },
            {
                text: "I rarely hold grudges against others.",
                effects: [0, -10]
            },
            {
                text: "I do the smallest amount work needed to get by.",
                effects: [0, -10]
            },
            {
                text: "I have an interest in art, such as music, literature or paintings.",
                effects: [10, 0]
            },
            {
                text: "I have frequent mood swings.",
                effects: [10, 0]
            },
            {
                text: "People sometimes tell me that I'm too judgemental of others.",
                effects: [0, 10]
            },
            {
                text: "I don't let impulses interfere with my behaviour.",
                effects: [0, 10]
            },
            {
                text: "Museums and art galleries bore me.",
                effects: [-10, 0]
            },
            {
                text: "I rarely feel down.",
                effects: [-10, 0]
            },
            {
                text: "I'm quick to forgive others.",
                effects: [0, -10]
            },
            {
                text: "I'm a very impulsive person.",
                effects: [0, -10]
            },
            {
                text: "I like eccentric and unconventional people.",
                effects: [10, 0]
            },
            {
                text: "I often worry about the little things.",
                effects: [10, 0]
            },
            {
                text: "I have a quick temper.",
                effects: [0, 10]
            },
            {
                text: "I follow a schedule and plan ahead.",
                effects: [0, 10]
            },
            {
                text: "I find discussions about philosophy to be quite boring.",
                effects: [-10, 0]
            },
            {
                text: "I'm not too concerned with others' feelings.",
                effects: [-10, 0]
            },
            {
                text: "I'm quite tolerant when it comes to judging others.",
                effects: [0, -10]
            },
            {
                text: "I have a messy room/desk.",
                effects: [0, -10]
            },
            {
                text: "I enjoy looking at atlases or maps of the world.",
                effects: [10, 0]
            },
            {
                text: "I sympathise with other people's feelings.",
                effects: [10, 0]
            },
            {
                text: "I often get into arguments when people tell me I'm wrong.",
                effects: [0, 10]
            },
            {
                text: "I'm a perfectionist.",
                effects: [0, 10]
            },
            {
                text: "I don't have much of an imagination.",
                effects: [-10, 0]
            },
            {
                text: "I don't mind dangerous jobs or activities.",
                effects: [-10, 0]
            },
            {
                text: "I rarely get angry.",
                effects: [0, -10]
            },
            {
                text: "Sometimes I have difficulty working due to being disorganised.",
                effects: [0, -10]
            },
            {
                text: "I enjoy learning about the histories and cultures of other countries.",
                effects: [10, 0]
            },
            {
                text: "I am very fearful when it comes to dangerous situations.",
                effects: [10, 0]
            },
            {
                text: "I'm very stubborn.",
                effects: [0, 10]
            },
            {
                text: "I pay close attention to minor details.",
                effects: [0, 10]
            },
            {
                text: "I wouldn't enjoy reading through an encylopedia.",
                effects: [-10, 0]
            },
            {
                text: "I'm less sentimental than most people.",
                effects: [-10, 0]
            },
            {
                text: "I try to be positive, even when people mess up.",
                effects: [0, -10]
            },
            {
                text: "I forget to put things back in their proper place.",
                effects: [0, -10]
            },
            {
                text: "I have lots of good ideas.",
                effects: [10, 0]
            },
            {
                text: "I often feel down.",
                effects: [10, 0]
            },
            {
                text: "I find it difficult to compromise with others when I'm sure I'm right.",
                effects: [0, 10]
            },
            {
                text: "I'm very driven when it comes to achieving goals.",
                effects: [0, 10]
            },
            {
                text: "I'm not as inquisitive as most people.",
                effects: [-10, 0]
            },
            {
                text: "I rarely worry about things.",
                effects: [-10, 0]
            },
            {
                text: "When others disagree with me I can be flexible in my opinions.",
                effects: [0, -10]
            },
            {
                text: "I often neglect my duties.",
                effects: [0, -10]
            },
        ],

        markers: []

    }
];
