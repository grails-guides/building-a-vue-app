package react.spring.security

import grails.rest.Resource

@Resource(uri = '/api/model')
class Model {

    String name

    static constraints = {
    }
}
