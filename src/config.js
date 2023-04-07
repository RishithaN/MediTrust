export const TODO_LIST_ADDRESS = '0xC1078B7811664A19790448d0a9C835Bb77a9E6e3'

export const TODO_LIST_ABI = 
[
	{
		"constant": true,
		"inputs": [
			{
				"name": "_medId",
				"type": "uint256"
			}
		],
		"name": "medInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_medId",
				"type": "uint256"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_loc",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addRetailer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_medName",
				"type": "string"
			},
			{
				"name": "_mrp",
				"type": "string"
			},
			{
				"name": "_expiry",
				"type": "string"
			},
			{
				"name": "_manuDate",
				"type": "string"
			}
		],
		"name": "newMed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]