type Character = {
    'id': number,
    'name': string,
    'status': string,
    'species': string,
    'type': string,
    'gender': string,
    'url': string,
    'created': date
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

type Info = {
    'count': number,
    'pages': number,
    'next': string,
    'prev': string
}