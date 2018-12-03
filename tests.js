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
                    color: "#c4eeb2"
                },
                b: {
                    text: "Spiritualism",
                    path: "https://i.ibb.co/DYZkgPV/spiritualism.png",
                    color: "#f7b9c4"
                },
                param: "m"
            },
            {
                a: {
                    text: "Egoism",
                    path: "https://i.ibb.co/VqNpmVk/egoism.png",
                    color: "#b6a8d8"
                },
                b: {
                    text: "Altruism",
                    path: "https://i.ibb.co/6t9tygg/altruism.png",
                    color: "#fff5bf"
                },
                param: "e"
            },
            {
                a: {
                    text: "Idealism",
                    path: "https://i.ibb.co/rmTfrvq/idealism.png",
                    color: "#ffe081"
                },
                b: {
                    text: "Pragmatism",
                    path: "https://i.ibb.co/3TSTpG5/pragmatism.png",
                    color: "#7474c7"
                },
                param: "i"
            },
            {
                a: {
                    text: "Hedonism",
                    path: "https://i.ibb.co/YW8nMkB/hedonism.png",
                    color: "#f99ba4"
                },
                b: {
                    text: "Asceticism",
                    path: "https://i.ibb.co/TmTS99G/asceticism.png",
                    color: "#9be18c"
                },
                param: "h"
            },
            {
                a: {
                    text: "Nihilism",
                    path: "https://i.ibb.co/PFH7jw9/nihilism.png",
                    color: "#86989c"
                },
                b: {
                    text: "Moralism",
                    path: "https://i.ibb.co/YDWs0Mt/moralism.png",
                    color: "#fcead7"
                },
                param: "n"
            },
            {
                a: {
                    text: "Rationalism",
                    path: "https://i.ibb.co/txNkzJg/rationalism.png",
                    color: "#ffd1b3"
                },
                b: {
                    text: "Romanticism",
                    path: "https://i.ibb.co/KDKZGyQ/romanticism.png",
                    color: "#8ac5bb"
                },
                param: "r"
            },
            {
                a: {
                    text: "Skepticism",
                    path: "https://i.ibb.co/26FttkZ/skepticism.png",
                    color: "#a2bcd4"
                },
                b: {
                    text: "Absolutism",
                    path: "https://i.ibb.co/QFVfmyr/absolutism.png",
                    color: "#ffe4bf"
                },
                param: "s"
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
                        scale: 4,
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

    }
];
