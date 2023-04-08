export const TODO_LIST_ADDRESS = '0xCfe3781b51e10563c290EB034a02f6E7B49F700f'

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
			},
			{
				"name": "_manuName",
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
	}
]