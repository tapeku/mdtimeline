/**
 * GaiaEHR (Electronic Health Records)
 * Copyright (C) 2013 Certun, LLC.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.model.administration.Printer', {
	extend: 'Ext.data.Model',
	table: {
		name: 'printers'
	},
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'facility_id',
			type: 'int',
			index: true
		},
		{
			name: 'department_id',
			type: 'int',
			index: true
		},
		{
			name: 'printer_description',
			type: 'string',
			len: 120
		},
		{
			name: 'printer_name',
			type: 'string',
			len: 80
		},
		{
			name: 'printer_protocol',
			type: 'string',
			len: 10,
			comment: 'lpr or ipp'
		},
		{
			name: 'printer_options',
			type: 'string',
			len: 250
		},
		{
			name: 'printer_host',
			type: 'string',
			len: 180
		},
		{
			name: 'printer_uri',
			type: 'string',
			len: 180
		},
		{
			name: 'printer_user',
			type: 'string',
			len: 40
		},
		{
			name: 'printer_pass',
			type: 'string',
			len: 20
		},
		{
			name: 'active',
			type: 'bool',
			index: true
		}
	],
	proxy: {
		type: 'direct',
		api: {
			read: 'Printer.getPrinters',
			create: 'Printer.addPrinter',
			update: 'Printer.updatePrinter',
			destroy: 'Printer.destroyPrinter'
		}
	}
});