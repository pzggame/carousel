'use strict';

/* Controllers */

var carouselApp = angular.module('carouselApp', []);

carouselApp.controller('RidingListCtrl', function($scope) {
    $scope.Math = window.Math;
    $scope.getTotal = function(candidates) {
        var voteTotals = 0;
        for (var i=0; i<candidates.length; i++) {
            voteTotals += candidates[i].votes;
        };
        return voteTotals;
    };
    $scope.getHighlight = function(index) {
        if(index==0)
        return 'winner';
    };
    $scope.ridingDetails = [
        {
            "id": 1,
            "name": "Annapolis",
            "num": 1,
            "pollsReported": 57,
            "pollsTotal": 57,
            "results": [
                {
                    "name": "Henry Spurr",
                    "partyId": 13,
                    "votes": 834,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Stephen McNeil",
                    "partyId": 12,
                    "votes": 7709,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Ginny Hurlock",
                    "partyId": 14,
                    "votes": 1390,
                    "isElected": false,
                    "partyCode": "PC"
                },
                {
                    "name": "Ron Neufeld",
                    "partyId": 11,
                    "votes": 227,
                    "isElected": false,
                    "partyCode": "GRN"
                }
            ]
        },
        {
            "id": 2,
            "name": "Antigonish",
            "num": 2,
            "pollsReported": 37,
            "pollsTotal": 37,
            "results": [
                {
                    "name": "Darren Thompson",
                    "partyId": 14,
                    "votes": 2868,
                    "isElected": false,
                    "partyCode": "PC"
                },
                {
                    "name": "Randy Delorey",
                    "partyId": 12,
                    "votes": 3882,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Maurice Smith",
                    "partyId": 13,
                    "votes": 2323,
                    "isElected": false,
                    "partyCode": "NDP"
                }
            ]
        },
        {
            "id": 3,
            "name": "Argyle-Barrington",
            "num": 3,
            "pollsReported": 41,
            "pollsTotal": 41,
            "results": [
                {
                    "name": "Kent Blades",
                    "partyId": 12,
                    "votes": 2909,
                    "isElected": false,
                    "partyCode": "LIB"
                },
                {
                    "name": "Chris d'Entremont",
                    "partyId": 14,
                    "votes": 3931,
                    "isElected": true,
                    "partyCode": "PC"
                },
                {
                    "name": "Kenn Baynton",
                    "partyId": 13,
                    "votes": 355,
                    "isElected": false,
                    "partyCode": "NDP"
                }
            ]
        },
        {
            "id": 4,
            "name": "Bedford",
            "num": 4,
            "pollsReported": 46,
            "pollsTotal": 46,
            "results": [
                {
                    "name": "Kelly Regan",
                    "partyId": 12,
                    "votes": 6080,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Mike Poworoznyk",
                    "partyId": 13,
                    "votes": 1700,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Joan Christie",
                    "partyId": 14,
                    "votes": 2026,
                    "isElected": false,
                    "partyCode": "PC"
                },

                {
                    "name": "Ian Charles",
                    "partyId": 11,
                    "votes": 217,
                    "isElected": false,
                    "partyCode": "GRN"
                }
            ]
        },
        {
            "id": 5,
            "name": "Cape Breton Centre",
            "num": 5,
            "pollsReported": 43,
            "pollsTotal": 43,
            "results": [
                {
                    "name": "Frank Corbett",
                    "partyId": 13,
                    "votes": 3440,
                    "isElected": true,
                    "partyCode": "NDP"
                },
                {
                    "name": "Dave Wilton",
                    "partyId": 12,
                    "votes": 3282,
                    "isElected": false,
                    "partyCode": "LIB"
                },
                {
                    "name": "Edna Lee",
                    "partyId": 14,
                    "votes": 873,
                    "isElected": false,
                    "partyCode": "PC"
                }
            ]
        },
        {
            "id": 6,
            "name": "Cape Breton-Richmond",
            "num": 6,
            "pollsReported": 45,
            "pollsTotal": 45,
            "results": [
                {
                    "name": "Michel Samson",
                    "partyId": 12,
                    "votes": 4390,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Bert Lewis",
                    "partyId": 13,
                    "votes": 1667,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Joe Janega",
                    "partyId": 14,
                    "votes": 1696,
                    "isElected": false,
                    "partyCode": "PC"
                }
            ]
        },
        {
            "id": 7,
            "name": "Chester-St. Margaret鈥檚",
            "num": 7,
            "pollsReported": 40,
            "pollsTotal": 40,
            "results": [
                {
                    "name": "Janet Irwin",
                    "partyId": 14,
                    "votes": 3193,
                    "isElected": false,
                    "partyCode": "PC"
                },
                {
                    "name": "Denise Peterson-Rafuse",
                    "partyId": 13,
                    "votes": 3341,
                    "isElected": true,
                    "partyCode": "NDP"
                },
                {
                    "name": "Tim Harris",
                    "partyId": 12,
                    "votes": 2943,
                    "isElected": false,
                    "partyCode": "LIB"
                }
            ]
        },
        {
            "id": 8,
            "name": "Clare-Digby",
            "num": 8,
            "pollsReported": 47,
            "pollsTotal": 47,
            "results": [
                {
                    "name": "Dean Kenley",
                    "partyId": 13,
                    "votes": 842,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Gordon Wilson",
                    "partyId": 12,
                    "votes": 5122,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Paul Emile LeBlanc",
                    "partyId": 14,
                    "votes": 2911,
                    "isElected": false,
                    "partyCode": "PC"
                },

                {
                    "name": "Ian Thurber",
                    "partyId": 15,
                    "votes": 492,
                    "isElected": false,
                    "partyCode": "IND"
                }
            ]
        },
        {
            "id": 9,
            "name": "Clayton Park West",
            "num": 9,
            "pollsReported": 51,
            "pollsTotal": 51,
            "results": [
                {
                    "name": "Diana Whalen",
                    "partyId": 12,
                    "votes": 5569,
                    "isElected": true,
                    "partyCode": "LIB"
                },
                {
                    "name": "Blake Wright",
                    "partyId": 13,
                    "votes": 1448,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Jaime Allen",
                    "partyId": 14,
                    "votes": 1236,
                    "isElected": false,
                    "partyCode": "PC"
                }
            ]
        },
        {
            "id": 10,
            "name": "Colchester-Musquodoboit Valley",
            "num": 10,
            "pollsReported": 49,
            "pollsTotal": 49,
            "results": [
                {
                    "name": "Larry Harrison",
                    "partyId": 14,
                    "votes": 3304,
                    "isElected": true,
                    "partyCode": "PC"
                },
                {
                    "name": "Gary Burrill",
                    "partyId": 13,
                    "votes": 2293,
                    "isElected": false,
                    "partyCode": "NDP"
                },
                {
                    "name": "Tom Martin",
                    "partyId": 12,
                    "votes": 2220,
                    "isElected": false,
                    "partyCode": "LIB"
                }
            ]
        }
    ];
});