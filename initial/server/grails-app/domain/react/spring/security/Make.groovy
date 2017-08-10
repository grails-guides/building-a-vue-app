package react.spring.security

import grails.rest.Resource

@Resource(uri = '/api/make')
class Make {

    String name

    static constraints = {
    }
}
