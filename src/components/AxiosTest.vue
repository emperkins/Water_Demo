<template>
    <v-layout row>
        <v-flex>
            <v-subheader>Raw API Response</v-subheader>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Raw API Response</h3>
                        <div>{{info}}</div>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>

            <v-subheader>API Query</v-subheader>
            <v-data-table
                    :headers="priceHeader.headers"
                    :items="info"
                    hide-actions
                    class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.code }}</td>
                    <td class="text-xs-right">{{ props.item.description }}</td>
                    <td class="text-xs-right">{{ props.item.rate_float }}</td>
                </template>
            </v-data-table>
            <v-subheader>Static Data Table</v-subheader>
            <v-data-table
                    :headers="mockData1.headers"
                    :items="mockData1.rows"
                    hide-actions
                    class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.sample }}</td>
                    <td class="text-xs-right">{{ props.item.type }}</td>
                    <td class="text-xs-right">{{ props.item.result }}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>


</template>

<script>
    import axios from 'axios'
    const getObj = {
        headers: {
            'Authorization': 'NLAuth nlauth_account=128437, nlauth_email=rest_agent@facs.ns, nlauth_signature=1O727o@R1*D@H5tl',
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }
    const reqObj = {
        headers: {
            'Authorization': 'NLAuth nlauth_account=128437, nlauth_email=rest_agent@facs.ns, nlauth_signature=1O727o@R1*D@H5tl',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://facs-jc-api-demo.azurewebsites.net',
            'Access-Control-Request-Headers': 'content-type',
            'Access-Control-Request-Method': 'POST'
        },
        withCredentials: true,
        data: {qry: "facility", facilityId: 1, waterSystemId: 1, waterSystemName: "Chiller"}
    };
    const priceHeader = {
        headers: [
            {
                text: 'Country Currency',
                align: 'left',
                sortable: false,
                value: 'code'
            },
            {text: 'Description', value: 'description'},
            {text: 'Current Rate', value: 'rate_float'}

        ]
    }
    const mockData1 = {
        headers: [
            {
                text: 'Sample ID',
                align: 'left',
                sortable: false,
                value: 'sample'
            },
            {text: 'Type', value: 'type'},
            {text: 'Result', value: 'result'}

        ],
        rows: [
            {
                value: false,
                sample: 'AB-123',
                type: 'PCM',
                result: 6.0
            },
            {
                value: false,
                sample: 'AB-124',
                type: 'AA',
                result: 17.6
            },
            {
                value: false,
                sample: 'AB-125',
                type: 'Micro-Vac',
                result: 55
            },
            {
                value: false,
                sample: 'AB-126',
                type: 'TEM',
                result: 44.85
            }
        ]
    }
    export default {
        data () {
            return {
                info: null,
                mockData1,
                priceHeader
            }
        },
        mounted () {
            axios
                .get('https://128437.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=225&deploy=1',getObj)
                //.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(function (resp) {
                    const rslt = resp.data
                    //console.log(rslt)
                    //const rslt = resp.data.bpi
                    //const list = Object.keys(rslt)
                    //const tableList = list.map(key => rslt[key])
                    //return tableList
                    return rslt
                })
                .then(list => (this.info = list))
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #1d3443;
        text-decoration: none;
    }
</style>
