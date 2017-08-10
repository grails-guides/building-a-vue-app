package react.spring.security

import grails.rest.Resource

@Resource(uri = '/api/vehicle')
class Vehicle {

    String name

    Make make
    Model model

    static belongsTo = [driver: Driver]

    static constraints = {
    }
}
