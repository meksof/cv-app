<template>
    <div class="summary">
        <div class="section-title">
            <h3>
                Résumé
            </h3>
        </div>
        <blockquote>
            <p>
                {{ summary | truncate(maxSummaryTextLength, moreInfo) }}
            </p>
            <a v-if="summary && summary.length > maxSummaryTextLength" class="read-more" v-on:click="toggleMoreInfo(summary)">{{ !moreInfo ? 'Voir plus': 'Voir moins' }}</a>
        </blockquote>
    </div>
</template>
<script>
export default {
    name: "appSummary",
    props: {
        summary: String
    },
    data: function() {
        return {
            moreInfo: false,
            maxSummaryTextLength: 104
        }
    },
    methods: {
        toggleMoreInfo: function() {
            this.moreInfo = !this.moreInfo;
        }
    }
}
</script>