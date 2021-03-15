// Sample Usage

// GET REQUEST

// with slug
this.$api.Sample.get({
    slug: `Teams`,
    success: (data) => {},
    fail: (error) => {}
})

// with params and slug
this.$api.Sample.get({
    params: [{key: 'pageSize', value: 1000}],
    slug: `Teams/${id}`,
    success: (data) => {},
    fail: (error) => {}
})

// POST REQUEST

let form = {}

this.$api.Sample.post({
    form: form,
    slug: `Teams/${id}`,
    success: (data) => {
    },
    fail: (error) => {
    }
})

// PUT REQUEST

let form = {}

this.$api.Sample.put({
    form: form,
    slug: `Teams/${id}`,
    success: (data) => {
    },
    fail: (error) => {
    }
})

// PATCH REQUEST

let form = {}

this.$api.Sample.patch({
    form: form,
    slug: `Teams/${id}`,
    success: (data) => {
    },
    fail: (error) => {
    }
})

// DELETE REQUEST

this.$api.Sample.delete({
    slug: `Teams/${id}`,
    success: (data) => {
    },
    fail: (error) => {
    }
})