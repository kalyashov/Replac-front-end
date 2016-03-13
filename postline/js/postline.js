/**
 * Created by Grigory on 11.03.2016.
 */

$(document).ready(function()
{
    var POSTS_API_URL = "http://replace.pythonanywhere.com/posts/api/list/?format=json";

    var json = '[{"id":1,"place":{"id":2,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Огни Сухоны","short_name":"Огни Сухоны","address":"г. Вологда, ул. Городской вал 24","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/os.png","contact_information":"88005553535"},"post_type":{"type_name":"SALE","description":"Акция"},"period_type":{"type_name":"ONCE_DAY","description":"Один день"},"title":"Первый","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/a4i5zktr5zsec3yzr9fnaz9mc.jpg","start_event_time":"2016-03-04T10:56:16Z","end_event_time":"2016-03-04T10:56:19Z","publish_time":"2016-03-13T13:28:25Z"},{"id":2,"place":{"id":2,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Огни Сухоны","short_name":"Огни Сухоны","address":"г. Вологда, ул. Городской вал 24","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/os.png","contact_information":"88005553535"},"post_type":{"type_name":"SALE","description":"Акция"},"period_type":{"type_name":"EVERY_DAY","description":"Каждый день"},"title":"Второй","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/Oboi_udivitelnymi_krasotkami_vypusk_113_234.jpg","start_event_time":"2016-03-04T10:56:53Z","end_event_time":"2016-03-04T10:56:55Z","publish_time":"2016-03-13T13:28:35Z"},{"id":3,"place":{"id":2,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Огни Сухоны","short_name":"Огни Сухоны","address":"г. Вологда, ул. Городской вал 24","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/os.png","contact_information":"88005553535"},"post_type":{"type_name":"EVENT","description":"Событие"},"period_type":{"type_name":"ONCE_DAY","description":"Один день"},"title":"Третий","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/hNRTcKSZ0ns.jpg","start_event_time":"2016-03-04T11:00:22Z","end_event_time":"2016-03-04T11:00:23Z","publish_time":"2016-03-13T13:28:42Z"},{"id":4,"place":{"id":1,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Тест кафе","short_name":"кафе","address":"Тест адрес","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/1073312.jpg","contact_information":"Тест информация"},"post_type":{"type_name":"NEWS","description":"Новость"},"period_type":{"type_name":"ONCE_DAY","description":"Один день"},"title":"Четвертый","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/Wallpapers_Sexy_Girls_739_417.jpg","start_event_time":"2016-03-04T11:01:45Z","end_event_time":"2016-03-04T11:01:47Z","publish_time":"2016-03-13T13:28:54Z"},{"id":5,"place":{"id":1,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Тест кафе","short_name":"кафе","address":"Тест адрес","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/1073312.jpg","contact_information":"Тест информация"},"post_type":{"type_name":"EVENT","description":"Событие"},"period_type":{"type_name":"ONCE_DAY","description":"Один день"},"title":"Пятый","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/Wallpapers_Sexy_Girls_626_255.jpg","start_event_time":"2016-03-04T11:02:13Z","end_event_time":"2016-03-04T11:02:17Z","publish_time":"2016-03-13T13:29:02Z"},{"id":6,"place":{"id":1,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Тест кафе","short_name":"кафе","address":"Тест адрес","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/1073312.jpg","contact_information":"Тест информация"},"post_type":{"type_name":"SALE","description":"Акция"},"period_type":{"type_name":"EVERY_DAY","description":"Каждый день"},"title":"Шестой","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","poster":"http://replace.pythonanywhere.com/media/posts/posters/d2_ze7uY3T0.jpg","start_event_time":"2016-03-04T11:02:51Z","end_event_time":"2016-03-04T11:02:53Z","publish_time":"2016-03-13T13:29:08Z"},{"id":7,"place":{"id":1,"city":{"name":"Вологда"},"place_type":{"type_name":"CAFE","description":"Кафе"},"full_name":"Тест кафе","short_name":"кафе","address":"Тест адрес","work_time":[{"work_time_type":"WORK_DAY","start_time":"10:45:29","end_time":"10:45:32"},{"work_time_type":"HOLIDAY","start_time":"10:45:52","end_time":"10:45:54"}],"logo":"http://replace.pythonanywhere.com/media/places/logo/1073312.jpg","contact_information":"Тест информация"},"post_type":{"type_name":"NEWS","description":"Новость"},"period_type":{"type_name":"ONCE_DAY","description":"Один день"},"title":"TimeZoneTest","description":"TimeZoneTest","poster":"http://replace.pythonanywhere.com/media/posts/posters/20.jpg","start_event_time":"2016-03-09T14:58:22Z","end_event_time":"2016-03-09T14:58:26Z","publish_time":"2016-03-13T13:29:20Z"}]';

    var Post = Backbone.Model.extend({ });

    var PostModalView = Backbone.View.extend({
        template: _.template($('#post-modal-template').html()),
        el: '.modal-dialog',
        initialize: function()
        {
            this.render();
        },
        render: function()
        {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var PostView = Backbone.View.extend({
        className: 'col-xs-6 col-sm-6 col-md-4',
        template: _.template($('#post-template').html()),
        initialize: function()
        {
            this.render();
        },
        render: function()
        {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },
        events:
        {
            "mouseover .post" : "showPostInfo",
            "mouseleave .post" : "hidePostInfo",
            "click .post" : "showDetailInfo"
        },
        showPostInfo: function()
        {
            this.$el.find('.description').slideDown(200);
            this.$el.find('.post-header').slideUp(200);
            this.$el.find('.place-about').hide();
        },
        hidePostInfo: function()
        {
            this.$el.find('.description').slideUp(200);
            this.$el.find('.post-header').slideDown(200);
            this.$el.find('.place-about').show();
        },
        showDetailInfo: function()
        {
            var postModalView = new PostModalView({model: this.model});
            $('#postModal').modal('show');
        }

    });

    var PostsCollection = Backbone.Collection.extend({
        model: Post,
        //url: POSTS_API_URL,
        initialize : function ()
        {
            //this.fetch();
        }
    });

    var posts = new PostsCollection(JSON.parse(json));

    var PostLine = Backbone.View.extend({
        className: 'postLine-row row',
        el: '#posts',
        initialize: function()
        {
            this.$el.append(this.render().el);
        },
        render: function()
        {

            this.collection.each(function(post)
            {
                var postView = new PostView({model: post});
                this.$el.append(postView.render().el);

            }, this);

            return this;
        },
    });

    var postLine = new PostLine({collection: posts});
});