package react.spring.security

import grails.rest.Resource

@Resource(uri = '/api/driver')
class Driver {

    String name

    static hasMany = [ vehicles: Vehicle ]

    static constraints = {
        vehicles nullable: true
    }
}
