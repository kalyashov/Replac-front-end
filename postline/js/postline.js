/**
 * Created by Grigory on 11.03.2016.
 */

$(document).ready(function()
{
    var POSTS_API_URL = "http://replace.pythonanywhere.com/posts/api/list/?format=json";

    var Post = Backbone.Model.extend({});

    // объект для отслеживания событий
    var dispatcher = _.extend(Backbone.Events);

    var PostModalView = Backbone.View.extend({
        template: _.template($('#post-modal-template').html()),
        el: '.modal-dialog row',
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
        className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4',
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
            "click .post" : "showDetailInfo"
        },
        showDetailInfo: function()
        {
            var postModalView = new PostModalView({model: this.model});
            $('#postModal').modal('show');
        }

    });

    var PostsCollection = Backbone.Collection.extend({
        model: Post,
        url: '/postline/json/posts.json',
        initialize : function ()
        {
            var collection = this;
            this.fetch().done(function()
            {
                dispatcher.trigger("postsJsonLoad", collection)
            });
        }
    });

    var PostLine = Backbone.View.extend({
        className: 'postLine-row row',
        el: '#posts',
        initialize: function()
        {
            this.$el.append(this.render().el);
        },
        render: function()
        {
            console.debug(this.collection);
            this.collection.each(function(post)
            {
                var postView = new PostView({model: post});
                this.$el.append(postView.render().el);

            }, this);

            return this;
        }
    });

    dispatcher.on('postsJsonLoad', function(collection)
    {
        postLine = new PostLine({'collection': collection});
    });

    var postLine = null,
        posts = new PostsCollection();
});