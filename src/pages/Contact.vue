<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1 mx-6">
      <div class="content w-full flex flex-col justify-center items-center">
        <h4 class="page-title mt-6">Contact Us</h4>
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl"
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact"/>
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field"/>
            </label>
          </p>
          <div class="sender-info mb-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold my-2" for="name">Your name</label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outliny"
                  type="text" id="name" name="name" v-model="formData.name"/>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold my-2" for="email">Your email</label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outliny"
                  type="email" id="email" name="email" v-model="formData.email"/>
            </div>
          </div>

          <div class="message-wrapper">
            <label class="block text-gray-700 text-sm font-bold my-2" for="message">Message</label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outliny"
                name="message" id="message" v-model="formData.message"></textarea>
          </div>

          <button
              class="bg-blue-600 hover:bg-blue-800 text-white font-bold
                     mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Submit form
          </button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: "Contact Us",
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
    },
    handleSubmit(e) {
      fetch('/contact-thanks', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
          .then(() => this.$router.push('/contact-thanks'))
          .catch(error => alert(error))
    }
  }
};
</script>

