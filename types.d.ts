type Info = {
    'count': number,
    'pages': number,
    'next': string,
    'prev': string
}

type Character = {
    'id': number,
    'name': string,
    'status': string,
    'species': string,
    'type': string,
    'gender': string,
    'url': string,
    'created': Date
    'origin': {
        'name': string,
        'url': string
    },
    'location': {
        'name': string,
        'url': string
    },
    'image': string,
    'episode': string
}

type Episode = {
    'id': number,
    'name': string,
    'air_date': Date,
    'episode': string,
    'characters': string,
    'url': string,
    'created': Date
}