import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	contactFields,
	contactOperations,
	dealFields,
	dealOperations,
} from './descriptions';

import {
	OptionsWithUri,
} from 'request';

export class BiginCRM implements INodeType {
	description: INodeTypeDescription = {
			displayName: 'BiginCRM',
			name: 'biginCRM',
			icon: 'file:BiginCRM.svg',
			group: ['transform'],
			version: 1,
			description: 'Consume BiginCRM API',
			defaults: {
					name: 'BiginCRM',
					color: '#1A82e2',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'BiginCRMApi',
					required: true,
			},
			],
			properties: [
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					options: [
						{
							name: 'Contact',
							value: 'contact',
						},
						{
							name: 'Deal',
							value: 'deal',
						},
					],
					default: 'account',
					description: 'Resource to consume',
				},
				...
			],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
			return [[]];
	}
}
