define(['pipAPI'], function (APIConstructor) {
    var API = new APIConstructor();

    API.addSettings('canvas', { maxWidth: 600, proportions: 0.7, background: '#ffffff', canvasBackground: '#ffffff' });

    API.addStimulusSets({
        stimuliBlock2: [
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } }
        ],
        stimuliBlock3: [
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } }
        ],
        stimuliBlock4: [
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } }
        ],
                stimuliBlock2: [
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Nachrichten' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Berichterstattung' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'Meldung' } }
        ],
        Default: [{ css: { color: 'black', 'font-size': '2em' } }],
        layout: [
            {
                data: { handle: 'left' },
                location: { left: 0, top: 0 },
                media: { word: 'interessant' },
                css: { color: 'green', 'font-size': '2em' }
            },
            {
                data: { handle: 'right' },
                location: { right: 0, top: 0 },
                media: { word: 'langweilig' },
                css: { color: 'green', 'font-size': '2em' }
            }
        ],
        layoutBlock1_3: [
              { data: { handle: 'left' }, location: { left: 0, top: 0 }, media: { word: 'interessant' }, css: { color: 'green', 'font-size': '2em' } },
              { data: { handle: 'right' }, location: { right: 0, top: 0 }, media: { word: 'langweilig' }, css: { color: 'green', 'font-size': '2em' } }
            ],
            layoutBlock2: [
              { data: { handle: 'left' }, location: { left: 0, top: 0 }, media: { html: '<div style="text-align:center;">interessant<br>Nachrichten</div>' }, css: { color: 'green', 'font-size': '2em' } },
              { data: { handle: 'right' }, location: { right: 0, top: 0 }, media: { word: 'langweilig' }, css: { color: 'green', 'font-size': '2em' } }
            ],
            layoutBlock4: [
              { data: { handle: 'left' }, location: { left: 0, top: 0 }, media: { word: 'interessant' }, css: { color: 'green', 'font-size': '2em' } },
              { data: { handle: 'right' }, location: { right: 0, top: 0 }, media: { html: '<div style="text-align:center;">langweilig<br>Nachrichten</div>' }, css: { color: 'green', 'font-size': '2em' } }
            ],
        feedback: [
            {
                handle: 'error',
                location: { top: 60 },
                media: { word: 'X' },
                css: { color: 'red', 'font-size': '3em' },
                nolog: true
            }
        ],
        slowPrompt: [
            {
                handle: 'slowPrompt',
                media: { word: 'Bitte schneller antworten!' },
                css: { color: 'red', 'font-size': '2em' },
                location: { bottom: 10 },
                nolog: true
            }
        ],
        stimuliBlock1: [
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'langweilig' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'interessant' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'trocken' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'spannend' } },
            { data: { side: 'right', handle: 'target' }, inherit: 'Default', media: { word: 'belanglos' } },
            { data: { side: 'left', handle: 'target' }, inherit: 'Default', media: { word: 'relevant' } }
        ]
    });
   API.addTrialSets('block1_trial', {
    input: [
        { handle: 'left', on: 'keypressed', key: 'e' },
        { handle: 'right', on: 'keypressed', key: 'i' }
    ],
    layout: [
        { inherit: { type: 'byData', set: 'layout', data: 'left' } },
        { inherit: { type: 'byData', set: 'layout', data: 'right' } }
    ],
    stimuli: [
        { inherit: { type: 'exRandom', set: 'stimuliBlock1' } },
        { inherit: { type: 'random', set: 'feedback' } },
        { inherit: { type: 'byData', set: 'slowPrompt', data: 'slowPrompt' } }
    ],
    interactions: [
        { conditions: [{ type: 'begin' }], actions: [
            { type: 'showStim', handle: 'target' },
            { type: 'setInput', input: { handle: 'slowWarning', on: 'timeout', duration: 2000 } }
        ]},
        { conditions: [{ type: 'inputEquals', value: 'slowWarning' }], actions: [
            { type: 'showStim', handle: 'slowPrompt' }
        ]},
        { conditions: [{ type: 'inputEqualsStim', property: 'side' }], actions: [
            { type: 'log' },
            { type: 'removeInput', handle: ['left', 'right'] },
            { type: 'hideStim', handle: 'slowPrompt' },
            { type: 'hideStim', handle: 'All' },
            { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 250 } }
        ]},
        { conditions: [
            { type: 'inputEquals', value: ['left', 'right'] },
            { type: 'inputEqualsStim', property: 'side', negate: true }
        ], actions: [
            { type: 'showStim', handle: 'error' }
        ]},
        { conditions: [{ type: 'inputEquals', value: 'end' }], actions: [
            { type: 'endTrial' }
        ]}
    ]
});

API.addTrialSets('block2_trial', {
    input: [
        { handle: 'left', on: 'keypressed', key: 'e' },
        { handle: 'right', on: 'keypressed', key: 'i' }
    ],
    layout: [
        { inherit: { type: 'byData', set: 'layoutBlock2', data: 'left' } },
        { inherit: { type: 'byData', set: 'layoutBlock2', data: 'right' } }
    ],
    stimuli: [
        { inherit: { type: 'exRandom', set: 'stimuliBlock2' } },
        { inherit: { type: 'random', set: 'feedback' } },
        { inherit: { type: 'byData', set: 'slowPrompt', data: 'slowPrompt' } }
    ],
    interactions: [
        { conditions: [{ type: 'begin' }], actions: [
            { type: 'showStim', handle: 'target' },
            { type: 'setInput', input: { handle: 'slowWarning', on: 'timeout', duration: 2000 } }
        ]},
        { conditions: [{ type: 'inputEquals', value: 'slowWarning' }], actions: [
            { type: 'showStim', handle: 'slowPrompt' }
        ]},
        { conditions: [{ type: 'inputEqualsStim', property: 'side' }], actions: [
            { type: 'log' },
            { type: 'removeInput', handle: ['left', 'right'] },
            { type: 'hideStim', handle: 'slowPrompt' },
            { type: 'hideStim', handle: 'All' },
            { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 250 } }
        ]},
        { conditions: [
            { type: 'inputEquals', value: ['left', 'right'] },
            { type: 'inputEqualsStim', property: 'side', negate: true }
        ], actions: [
            { type: 'showStim', handle: 'error' }
        ]},
        { conditions: [{ type: 'inputEquals', value: 'end' }], actions: [
            { type: 'endTrial' }
        ]}
    ]
});

    API.addTrialSets('intro_trial', {
    input: [
        { handle: 'space', on: 'space' }
    ],
    stimuli: [
        {
            handle: 'intro_text',
            media: {
                html: `
                <div style="text-align:center; font-size:1.3em; color:black;">
                    <p><strong>Part 1 of 4</strong></p>
                </div>`
            }
        }
    ],
    interactions: [
        {
            conditions: [{ type: 'begin' }],
            actions: [{ type: 'showStim', handle: 'intro_text' }]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'space' }],
            actions: [{ type: 'endTrial' }]
        }
    ]
});

API.addTrialSets('transition_trial1', {
    input: [
        { handle: 'space', on: 'space' }
    ],
    stimuli: [
        {
            handle: 'transition_text',
            media: {
                html: `
                <div style="text-align:center; font-size:1.3em; color:black;">
                    <p><strong>Next Part</strong></p>
                    <p>Part 2 will begin in 30 seconds</p>
                    <p><em>Press Spacebar to continue now.</em></p>
                </div>`
            }
        }
    ],
    interactions: [
        {
            conditions: [{ type: 'begin' }],
            actions: [
                { type: 'showStim', handle: 'transition_text' },
                { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 30000 } }
            ]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'space' }],
            actions: [{ type: 'endTrial' }]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'end' }],
            actions: [{ type: 'endTrial' }]
        }
    ]
});
API.addTrialSets('transition_trial2', {
    input: [
        { handle: 'space', on: 'space' }
    ],
    stimuli: [
        {
            handle: 'transition_text',
            media: {
                html: `
                <div style="text-align:center; font-size:1.3em; color:black;">
                    <p><strong>Next Part</strong></p>
                    <p>Part 3 will begin in 30 seconds</p>
                    <p><em>Press Spacebar to continue now.</em></p>
                </div>`
            }
        }
    ],
    interactions: [
        {
            conditions: [{ type: 'begin' }],
            actions: [
                { type: 'showStim', handle: 'transition_text' },
                { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 30000 } }
            ]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'space' }],
            actions: [{ type: 'endTrial' }]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'end' }],
            actions: [{ type: 'endTrial' }]
        }
    ]
});

API.addTrialSets('transition_trial3', {
    input: [
        { handle: 'space', on: 'space' }
    ],
    stimuli: [
        {
            handle: 'transition_text',
            media: {
                html: `
                <div style="text-align:center; font-size:1.3em; color:black;">
                    <p><strong>Next Part</strong></p>
                    <p>Part 4 will begin in 30 seconds</p>
                    <p><em>Press Spacebar to continue now.</em></p>
                </div>`
            }
        }
    ],
    interactions: [
        {
            conditions: [{ type: 'begin' }],
            actions: [
                { type: 'showStim', handle: 'transition_text' },
                { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 30000 } }
            ]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'space' }],
            actions: [{ type: 'endTrial' }]
        },
        {
            conditions: [{ type: 'inputEquals', value: 'end' }],
            actions: [{ type: 'endTrial' }]
        }
    ]
});
    API.addTrialSets('block3_trial', {
        input: [
            { handle: 'left', on: 'keypressed', key: 'e' },
            { handle: 'right', on: 'keypressed', key: 'i' }
        ],
        layout: [
            { inherit: { type: 'byData', set: 'layoutBlock1_3', data: 'left' } },
            { inherit: { type: 'byData', set: 'layoutBlock1_3', data: 'right' } }
        ],
        stimuli: [
            { inherit: { type: 'exRandom', set: 'stimuliBlock3' } },
            { inherit: { type: 'random', set: 'feedback' } },
            { inherit: { type: 'byData', set: 'slowPrompt', data: 'slowPrompt' } }
        ],
        interactions: [
            { conditions: [{ type: 'begin' }], actions: [
                { type: 'showStim', handle: 'target' },
                { type: 'setInput', input: { handle: 'slowWarning', on: 'timeout', duration: 2000 } }
            ]},
            { conditions: [{ type: 'inputEquals', value: 'slowWarning' }], actions: [
                { type: 'showStim', handle: 'slowPrompt' }
            ]},
            { conditions: [{ type: 'inputEqualsStim', property: 'side' }], actions: [
                { type: 'log' },
                { type: 'removeInput', handle: ['left', 'right'] },
                { type: 'hideStim', handle: 'slowPrompt' },
                { type: 'hideStim', handle: 'All' },
                { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 250 } }
            ]},
            { conditions: [
                { type: 'inputEquals', value: ['left', 'right'] },
                { type: 'inputEqualsStim', property: 'side', negate: true }
            ], actions: [
                { type: 'showStim', handle: 'error' }
            ]},
            { conditions: [{ type: 'inputEquals', value: 'end' }], actions: [
                { type: 'endTrial' }
            ]}
        ]
    });

    API.addTrialSets('block4_trial', {
        input: [
            { handle: 'left', on: 'keypressed', key: 'e' },
            { handle: 'right', on: 'keypressed', key: 'i' }
        ],
        layout: [
            { inherit: { type: 'byData', set: 'layoutBlock4', data: 'left' } },
            { inherit: { type: 'byData', set: 'layoutBlock4', data: 'right' } }
        ],
        stimuli: [
            { inherit: { type: 'exRandom', set: 'stimuliBlock4' } },
            { inherit: { type: 'random', set: 'feedback' } },
            { inherit: { type: 'byData', set: 'slowPrompt', data: 'slowPrompt' } }
        ],
        interactions: [
            { conditions: [{ type: 'begin' }], actions: [
                { type: 'showStim', handle: 'target' },
                { type: 'setInput', input: { handle: 'slowWarning', on: 'timeout', duration: 2000 } }
            ]},
            { conditions: [{ type: 'inputEquals', value: 'slowWarning' }], actions: [
                { type: 'showStim', handle: 'slowPrompt' }
            ]},
            { conditions: [{ type: 'inputEqualsStim', property: 'side' }], actions: [
                { type: 'log' },
                { type: 'removeInput', handle: ['left', 'right'] },
                { type: 'hideStim', handle: 'slowPrompt' },
                { type: 'hideStim', handle: 'All' },
                { type: 'setInput', input: { handle: 'end', on: 'timeout', duration: 250 } }
            ]},
            { conditions: [
                { type: 'inputEquals', value: ['left', 'right'] },
                { type: 'inputEqualsStim', property: 'side', negate: true }
            ], actions: [
                { type: 'showStim', handle: 'error' }
            ]},
            { conditions: [{ type: 'inputEquals', value: 'end' }], actions: [
                { type: 'endTrial' }
            ]}
        ]
    });

    API.addSequence([
        { inherit: 'intro_trial' },
        { mixer: 'repeat', times: 12, data: [{ inherit: 'block1_trial' }] },
        { inherit: 'transition_trial1' },
        { mixer: 'repeat', times: 21, data: [{ inherit: 'block2_trial' }] },
        { inherit: 'transition_trial2' },

        { mixer: 'repeat', times: 12, data: [{ inherit: 'block3_trial' }] },
        { inherit: 'transition_trial3' },
        { mixer: 'repeat', times: 21, data: [{ inherit: 'block4_trial' }] }
    ]);

    API.addSettings('logger', {
        url: 'http://tuspl13-pp.srv.mwn.de:8000/iat/save',
        method: 'post',
        contentType: 'application/json',
        serialize: function (logName, logs) {
            return JSON.stringify({ logName, logs });
        }
    });

    API.addSettings('onEnd', function () {
        var data = API.logger.get();
        var participant_id = sessionStorage.getItem('participant_id');

        fetch('http://tuspl13-pp.srv.mwn.de:8000/iat/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                participant_id: participant_id,
                logs: data
            })
        })
        .then(res => res.json())
        .then(response => {
            console.log('Server response:', response);

            // ✅ Show thank-you screen after successful save
            document.body.innerHTML = `
                <div style="display:flex; justify-content:center; align-items:center; height:100vh;">
                    <div style="text-align:center; font-size:1.5em; color:black;">
                        <p><strong>Vielen Dank für Ihre Teilnahme!</strong></p>
                        <p>Ihre Antworten wurden erfolgreich gespeichert.</p>
                        <p>Sie können das Fenster jetzt schließen.</p>
                    </div>
                </div>
            `;
        })
        .catch(err => {
            console.error('Fetch error:', err);
            alert('Ein Fehler ist aufgetreten beim Speichern Ihrer Antworten. Bitte melden Sie dies dem Versuchsleiter.');
        });
    });

    return API.script;
});
